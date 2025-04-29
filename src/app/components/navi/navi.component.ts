import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';


@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CommonModule,CartSummaryComponent],
  templateUrl: './navi.component.html',
  styleUrl: './navi.component.css'
})
export class NaviComponent {

}
