import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
})
export class NewProductComponent implements OnInit {
  products: object[] = [];
  loading: boolean = true;
  constructor(private service: ProductServicesService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }
  getAllProduct() {
    this.loading = true;
    this.service.getNewProduct().subscribe((res: any) => {
      console.log(res);
      this.products = res.data.items;

      this.loading = false;
    });
  }
}
