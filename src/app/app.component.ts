import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { NaviComponent } from './components/navi/navi.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    CartSummaryComponent,
    LoginComponent,
    HttpClientModule,
    RouterModule,
    VatAddedPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    CategoryService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Şefik DİNÇ';

  constructor(private http: HttpClient) {}

  testRequest() {
    console.log("Test API isteği yapılıyor...");
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(
      response => console.log("API Yanıtı:", response),
      error => console.error("API Hatası:", error)
    );
  }
}
