import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CategoriesComponent } from './categories/categories.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    PagesComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
