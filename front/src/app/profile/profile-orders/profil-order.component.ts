import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-products',
  templateUrl: './profil-order.component.html',
  styleUrls: ['./profil-order.component.css'],
  //moramo ovako da dodamo servis u komponentu
})
export class MyOrdersComponent {
  // public products:Array<Product>;
  // private sub;
  // constructor(
  //      private productService:ProductsService,
  //      //private cartService:CartService,
  //      private router: Router
  // ) { }

  // ngOnInit() {
  //     this.load();
  // }
  // load = () => {
  //    this.sub = this.productService.getProducts('././assets/mock-data/products.json')
  //         .subscribe(res => {
  //             this.products = res;
  //         })
  // };
  // addToCart = (product) => {
  //     //this.cartService.addToCart({product,quantity:1})
  // };
  // ngOnDestroy() {
  //     this.sub.unsubscribe();
  // }
}
