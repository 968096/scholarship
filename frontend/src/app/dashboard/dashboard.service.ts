import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Scholarship } from '../models/scholarship.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = `${environment.apiUrl}/scholarships`;

  constructor(private http: HttpClient) { }

  getScholarships(): Observable<Scholarship[]> {
    return this.http.get<Scholarship[]>(this.apiUrl);
  }
}