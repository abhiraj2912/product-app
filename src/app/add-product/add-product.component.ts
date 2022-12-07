import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productCode=""
  productName=""
  manuDate=""
  expDate=""
  brand=""
  price=""
  sellerName=""
  distributorName=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"productCode":this.productCode,"productName":this.productName,"manuDate":this.manuDate,"expDate":this.expDate,"brand":this.brand, "price":this.price,"sellerName":this.sellerName,"distributorName":this.distributorName}
    console.log(data)

    this.api.addProduct(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Added Successfully")
          this.productCode=""
          this.productName=""
          this.manuDate=""
          this.expDate=""
          this.brand=""
          this.price=""
          this.sellerName=""
          this.distributorName=""

      } else {
        alert("Something went wrong")
      }
      }
    )
  }

}
