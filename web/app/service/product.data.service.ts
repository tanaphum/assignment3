import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../product/product';
import 'rxjs/add/operator/map';
@Injectable()
export class ProductsDataService {
  constructor(private http: Http){}
  getProductsData(){
    let productArray:Product[];
    return this.http.get('app/data/people.json')
      .map(res => res.json().students);


  }
    getProduct(id:number){
      return null;
  }


  addProduct(product:Product,imageFile:any){
    return null;
  }

}
