import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SharedComponent } from './shared/shared.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SharedComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, SharedComponent]
})
export class CoreModule { }
