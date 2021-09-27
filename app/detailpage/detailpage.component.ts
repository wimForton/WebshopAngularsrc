import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Moon } from '../models/moon';
import { Planet } from '../models/planet';
import { Star } from '../models/star';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  errorMessage:any;
  testId:number;
  category:number;
  categoryName:string;
  imagepath:string;
  moon:boolean = false;
  planet:boolean = false;
  star:boolean = false;
  product:any;

  constructor(private route: ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.setProporties();
    this.GetAnyProduct(this.testId, this.category);
  }

  setProporties(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const category = Number(this.route.snapshot.paramMap.get('productCategory'));
    this.testId = id;
    this.category = category;
    if(this.category == 1){this.moon = true; this.categoryName = "moon"}
    if(this.category == 2){this.planet = true; this.categoryName = "planet"}
    if(this.category == 3){this.star = true; this.categoryName = "star"}

  }
  GetAnyProduct(id:number, cat:number){
    this.productService.getAnyProduct(id, cat).subscribe({
      next: p => {
        this.product = p;
      },
      error: e => this.errorMessage = e
    });
  }
}
