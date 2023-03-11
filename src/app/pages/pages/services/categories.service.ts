import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../intefaces/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiURL = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get<Categories[]>(this.apiURL);
  }
}
