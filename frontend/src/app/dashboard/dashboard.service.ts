import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Scholarship } from '../models/scholarship.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = `${environment.apiUrl}/scholarships`;

  constructor(private http: HttpClient) { 
    console.log('DashboardService initialized with API URL:', this.apiUrl);
  }

  getScholarships(): Observable<Scholarship[]> {
    console.log('Fetching scholarships from:', this.apiUrl);
    return this.http.get<Scholarship[]>(this.apiUrl).pipe(
      tap(data => {
        console.log('Scholarships received:', data);
        console.log('Number of scholarships:', data.length);
      }),
      catchError((error) => {
        console.error('Error fetching scholarships:', error);
        return throwError(error);
      })
    );
  }

  searchScholarships(title: string): Observable<Scholarship[]> {
    const searchUrl = `${this.apiUrl}/search?title=${encodeURIComponent(title)}`;
    console.log('Searching scholarships at:', searchUrl);
    return this.http.get<Scholarship[]>(searchUrl).pipe(
      tap(data => console.log('Search results:', data)),
      catchError((error) => {
        console.error('Error searching scholarships:', error);
        return throwError(error);
      })
    );
  }
}