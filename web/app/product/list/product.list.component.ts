import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../product";
import {ProductsDataService} from "../../service/product.data.service";

@Component({
  selector: 'product',
  templateUrl: 'app/product/list/product.list.component.html',
  styleUrls:['app/product/list/product.list.component.css']
})
export class ProductsComponent {
  products: Product[];

  constructor (private productDataService:ProductsDataService, private router: Router){}
  ngOnInit(){
    this.productDataService.getProductsData()
      .subscribe(products => this.products= products);
  }

  upQuantity(product:Product){
    product.ProductAmount++;
  }

  downQuantity(product:Product){
    if (product.ProductAmount >0)
      product.ProductAmount--;
  }
  showDetail(product: Product){
    this.router.navigate(['/detail',product.id]);
  }


}
