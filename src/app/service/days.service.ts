import { Injectable } from '@angular/core';

import { Dia } from '../models/Dia';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayService {
  private baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Dia[]> {
    const url = `${this.baseApiUrl}/dias-reservados`;
    return this.http.get<Dia[]>(url);
  }
}

