import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductServicesService {
  constructor(private http: HttpClient) {}

  getNewProduct() {
    const headers = new HttpHeaders()
      .set('StoreID', '4')
      .set('Authorization', 'f44a4aabfc5992514d262d7f517327e7')
      .set('UserAddressID', '60877');
    return this.http.get(
      'https://api.manoapp.com/api/v1/users/products/whats_new',
      {
        headers: headers,
      }
    );
  }
  getProductById(id: any) {
    const headers = new HttpHeaders()
    .set('StoreID', '4')
    .set('Authorization', 'f44a4aabfc5992514d262d7f517327e7')
    .set('UserAddressID', '60877');
    return this.http.get('https://api.manoapp.com/api/v1/users/products/' + id,   {
      headers: headers,
    });
  }
}
// GET /api/v1/users/products/:id
