import {Component, ViewChild,Input, ElementRef} from '@angular/core';
import {Router} from "@angular/router";
import {Product} from "../product";
import {ProductsDataService} from "../../service/product.data.service";

@Component({
  selector: 'products-add',
  templateUrl: 'app/product/add/product.add.component.html',
  styleUrls: ['app/product/add/product.add.component.css']
})
export class ProductsAddComponent {
  product: any = {};
  constructor(private productDataService: ProductsDataService, private router: Router) {
  };

  ngOnInit() {
    this.product = new Product();
  }
  upQuantity(product: Product) {
    product.ProductAmount++;
  }

  downQuantity(product: Product) {
    if ( product.ProductAmount > 0)
      product.ProductAmount--;
  }
  @ViewChild('fileInput') inputEl: ElementRef;
  addProduct(product: Product) {
    let result: Product;
    console.log(product)
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;

    this.productDataService.addProduct(product,inputEl.files.item(0))
      .subscribe(resultStudent => {
        result = resultStudent
        if (result != null){
          this.router.navigate(['/list']);
        }else{
          alert("Error in adding the student");
        }
      });
  }

  onFileChange(event, product: any) {

    var filename = event.target.files[0].name;
    console.log(filename);
    product.image = filename;
    product.file = event.target.files[0];
  }
}
