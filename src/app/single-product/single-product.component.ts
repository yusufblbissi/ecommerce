import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  id: any;
  data: any ;
  constructor(
    private ractive: ActivatedRoute,
    private srv: ProductServicesService
  ) {}

  ngOnInit(): void {
    this.id = this.ractive.snapshot.paramMap.get('id');
    this.getProduct();
  }
  getProduct() {
    this.srv.getProductById(this.id).subscribe((res:any) => {
      this.data = res.data;
      
    });
  }
}
