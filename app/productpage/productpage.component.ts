import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})



export class ProductpageComponent implements OnInit {

  constructor(private productService:ProductService) { }
  errorMessage:any;
  products: Product[];
  productCounts: number;
  productCount: number = 0;
  product: Product;
  page: number = 0;
  productsReturned:number;
  public showMoons:boolean = true;
  public showPlanets:boolean = true;
  public showStars:boolean = true;
  searchString:string = "all";

  public model: any;
  formatter = (result: string) => result.toUpperCase();


  public onSearchEnter(val:string){
    this.searchString = val;
    this.GetSearchProducts();
    console.log(val);
  }

  public onShowMoonsChanged(value:boolean){
    this.showMoons = value;
    this.GetSearchProducts();
  }
  public onShowPlanetsChanged(value:boolean){
    this.showPlanets = value;
    this.GetSearchProducts();
  }
  public onShowStarsChanged(value:boolean){
    this.showStars = value;
    this.GetSearchProducts();
  }
  // model = {
  //   left: true,
  //   middle: false,
  //   right: false
  // };

  ngOnInit(): void {
    
    this.GetSearchProducts();
    this.CountProducts();
  }
  CountProducts(){
    this.productService.CountProducts().subscribe({
      next: p => {
        this.productCount = p;

        //console.log(`This is in the method: ${this.products}`);
      },
      error: e => this.errorMessage = e
    });
  }
  GetAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: p => {
        this.products = p;
          p.forEach(element => {
            console.log(`name: ${element.name}`);
          });
        console.log(`This is in the method: ${this.products}`);
      },
      error: e => this.errorMessage = e
    });
  }
  GetSearchProducts(){
    if(this.searchString == ""){
      this.searchString = "all";
    }
    this.productService.getSearchProducts(this.page, this.showMoons, this.showPlanets, this.showStars, this.searchString).subscribe({
      next: p => {
        this.products = p;
          p.forEach(element => {
            //console.log(`name: ${element.name}`);
          });
        this.CountProducts();
        console.log(`This is in the method: getSearchProducts`);
        console.log(`productCount: ${this.productCount}`);
      },
      error: e => this.errorMessage = e
    });
    console.log(`productCount: ${this.productCount}`);
  }
  GetProductsPage(inPage:number){
    this.productService.getProductsPage(inPage).subscribe({
      next: p => {
        this.products = p;
        this.productsReturned = p.length;
          p.forEach(element => {
            console.log(`name: ${element.name}`);
          });
        console.log(`This is in the method: ${this.products}`);
      },
      error: e => this.errorMessage = e
    });
  }

}
