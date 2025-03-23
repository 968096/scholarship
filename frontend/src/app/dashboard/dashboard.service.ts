import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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
    // Usando HttpParams para evitar problemas de codificação de URL
    let params = new HttpParams();
    if (title) {
      params = params.set('title', title);
    }
    
    const searchUrl = `${this.apiUrl}/search`;
    console.log('Searching scholarships at:', searchUrl, 'with params:', params.toString());
    
    return this.http.get<Scholarship[]>(searchUrl, { params }).pipe(
      tap(data => {
        console.log('Search results:', data);
        console.log('Search results count:', data.length);
      }),
      catchError((error) => {
        console.error('Error searching scholarships:', error);
        return throwError(error);
      })
    );
  }
}