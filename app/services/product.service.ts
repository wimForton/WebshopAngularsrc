import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Moon } from '../models/moon';
import { Planet } from '../models/planet';
import { Product } from '../models/product';
import { Star } from '../models/star';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  private baseUrl = "https://localhost:44310/api";

  CountProducts():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/Products/count`);
  }
  getProductById(id:number):Observable<Product>
  {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }
  getAllProducts():Observable<Product[]>{
    console.log(`${this.baseUrl}/Products`);
    return this.http.get<Product[]>(`${this.baseUrl}/Products`);
  }
  getSearchProducts(page:number, moons:boolean, planets: boolean, stars: boolean, searchString:string):Observable<Product[]>{
    var resultPath = `${this.baseUrl}/Products/page/${page}?moons=${moons}&planets=${planets}&stars=${stars}&searchString=${searchString}`;
    console.log(resultPath);
    return this.http.get<Product[]>(resultPath);

    //https://localhost:44310/api/Products/page/1?moons=false&planets=true&stars=true&searchString=all
  }
  getAnyProduct(id:number,cat:number):Observable<any>{
    var result;
    var resultPath = "";
      if(cat == 1) resultPath = `${this.baseUrl}/Products/moon/${id}`;
      if(cat == 2) resultPath = `${this.baseUrl}/Products/planet/${id}`;
      if(cat == 3) resultPath = `${this.baseUrl}/Products/star/${id}`;
      result = this.http.get<any>(resultPath);
    return result;
  }
  getMoon(id:number):Observable<Moon>{
    var result;
      //https://localhost:44310/api/Products/moon/1
      var resultPath = `${this.baseUrl}/Products/moon/${id}`;
      result = this.http.get<Moon>(resultPath);
    return result;
  }
  getPlanet(id:number):Observable<Planet>{
    var result;
      //https://localhost:44310/api/Products/moon/1
      var resultPath = `${this.baseUrl}/Products/planet/${id}`;
      result = this.http.get<Planet>(resultPath);
    return result;
  }
  getStar(id:number):Observable<Star>{
    var result;
      //https://localhost:44310/api/Products/moon/1
      var resultPath = `${this.baseUrl}/Products/star/${id}`;
      result = this.http.get<Star>(resultPath);
    return result;
  }
  getProductsPage(page:number):Observable<Product[]>{
    console.log(`${this.baseUrl}/Products`);
    return this.http.get<Product[]>(`${this.baseUrl}/Products/page/${page}`);
  }
}

// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { People } from '../Models/People';

// @Injectable({
//   providedIn: 'root'
// })
// export class PeopleService {

//   constructor(private http:HttpClient) { }
//   private baseUrl = "https://starwars.egghead.training/people";

//   getPerson(id:number):Observable<People>
//   {
//     return this.http.get<People>(`${this.baseUrl}/${id}`);
//   }
//   getPeople():Observable<People[]>{
//     return this.http.get<People[]>(`${this.baseUrl}`);
//   }
//   // createPerson(person:People):Observable<People>{
//   //   const httpHeaders: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
//   //   return this.http.post<People>(`${this.baseUrl}`,person,{headers:httpHeaders});
//   // }
//   // deletePerson():Observable<People>{}
// }