import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { NaviComponent } from './components/navi/navi.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { RouterModule } from '@angular/router';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';

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
    HttpClientModule,
    RouterModule,
    VatAddedPipe,
    FormsModule
  ],
  providers: [ProductService, CategoryService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'northwind';
  user: string = 'Şefik DİNÇ';
}
