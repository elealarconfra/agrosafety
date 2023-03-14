import { Component, Input, OnInit } from '@angular/core';
import { Categories } from '../intefaces/categories.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  @Input() category!:Categories;

  constructor(){}

  ngOnInit():void{

  }

  onClick():void{
    console.log('Click')
  }

}
