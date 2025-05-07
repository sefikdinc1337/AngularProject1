import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators,ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent implements OnInit{

  productAddForm : FormGroup;

constructor(private formBuilder:FormBuilder,
   private productService:ProductService, private toastrService:ToastrService){ }

ngOnInit(): void {
  this.createProductAddForm();
}

createProductAddForm(){
this.productAddForm = this.formBuilder.group({
  productName:["",Validators.required],
  unitPrice: ["",Validators.required],
  unitsInStock:["",Validators.required],
  categoryId:["",Validators.required]
})

}

add() {
  if (this.productAddForm.valid) {
    let productModel = Object.assign({}, this.productAddForm.value);
    
    this.productService.add(productModel).subscribe({
      next: (response) => {
        this.toastrService.success(response.message, "Başarılı");
      },
      error: (responseError) => {
        if (responseError.error && responseError.error.Errors && responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası");
          }
        } else {
          this.toastrService.error("Beklenmeyen bir hata oluştu", "Hata");
        }
      }
    });

  } else {
    this.toastrService.error("Formunuz Eksik", "Dikkat");
  }
}



}
