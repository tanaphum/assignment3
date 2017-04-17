import {Injectable} from "@angular/core";

import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";
import {Product} from "../product/product";

@Injectable()
export class ProductsDataDBService {

  products:Product[] = [
    {
      "id" : 1,
      "ProductId" : "miku01",
      "name" : "Hastune Miku - Snow Miku",
      "surname": "string",
      "price": 44500.00,
      "image": "image/Hastune_Miku___S_589aa63ba5689.jpg",
      "ProductAmount":3,
      "description":"Good Smile Company release Hastune Miku - Snow Miku version from VOCALOID Series. Scale 1/7 PVC. Around 275mm tall. Released in November 2017."
    },
    {
      "id" : 2,
      "ProductId" : "Maki01",
      "name" : "Maki Nishikino Alter Ver.",
      "surname": "string",
      "price": 44500.00,
      "image": "image/Maki_Nishikino_A_5703e3387162a.jpg",
      "ProductAmount":3,
      "description":"Alter release Maki Nishikino Alter version from Love Live!. Scale 1/7 PVC. Height approx 240mm. Release in September 2016."
    }
  ]

  getProductsData(){
    return new
      Observable<Product[]>((subscriber:Subscriber<Product[]>)=>subscriber.next(this.products));
  }
  getProduct(id:number){
    let product = this.products.find(product=> product.id === +id);
    return new Observable<Product>((subscriber:Subscriber<Product>)=>subscriber.next(product
    ));
  }
  addProduct(product:Product){
    product.id = this.products.length+1;
    this.products.push(product);
  }

}
