import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { HomeLayoutPagesRoutingModule } from "./home-layout-page-routing.module";
import { HomeLayoutPageComponent } from './home-layout-page.component';



@NgModule({
    imports: [
        CommonModule,
        HomeLayoutPagesRoutingModule,
        FormsModule        
    ],
    declarations: [
        HomeLayoutPageComponent
    ]
})
export class HomeLayoutPagesModule { }
