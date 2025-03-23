import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Scholarship } from '../models/scholarship.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = `${environment.apiUrl}/scholarships`;

  constructor(private http: HttpClient) { }

  getScholarships(): Observable<Scholarship[]> {
    return this.http.get<Scholarship[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error fetching scholarships:', error);
        return throwError(error);
      })
    );
  }

  searchScholarships(title: string): Observable<Scholarship[]> {
    return this.http.get<Scholarship[]>(`${this.apiUrl}/search?title=${title}`).pipe(
      catchError((error) => {
        console.error('Error searching scholarships:', error);
        return throwError(error);
      })
    );
  }
}