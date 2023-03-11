import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Categories } from './intefaces/categories.interface';
import { CategoriesService } from './services/categories.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit{
  categories!: Categories[]
  constructor(private catetegoriesSvc: CategoriesService){}

  ngOnInit(){
    this.catetegoriesSvc.getCategories()
    .pipe(
      tap((categories: Categories[]) => this.categories = categories)
    )
    .subscribe()
  }
}
