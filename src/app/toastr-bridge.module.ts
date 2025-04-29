import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: 
  [ToastrModule.forRoot({
    positionClass:"toast-bottom-right"
  })], 
  exports: [ToastrModule]            
})
export class ToastrBridgeModule {}
