import { Component } from '@angular/core';

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


  readValues=()=>{
    let data:any={"productCode":this.productCode,"productName":this.productName,"manuDate":this.manuDate,"expDate":this.expDate,"brand":this.brand, "price":this.price,"sellerName":this.sellerName,"distributorName":this.distributorName}
  }

}
