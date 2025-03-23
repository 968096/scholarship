import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Scholarship } from '../models/scholarship.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  scholarships: Scholarship[] = [];
  searchTitle: string = '';
  loading: boolean = false;
  error: string | null = null;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    console.log('Dashboard component initialized');
    this.loadScholarships();
  }

  loadScholarships(): void {
    this.loading = true;
    this.error = null;
    console.log('Loading scholarships...');
    
    this.dashboardService.getScholarships().subscribe(
      (data: Scholarship[]) => {
        console.log('Scholarships loaded successfully:', data);
        this.scholarships = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching scholarships', error);
        this.error = 'Ocorreu um erro ao carregar as bolsas. Por favor, tente novamente.';
        this.loading = false;
      }
    );
  }

  searchScholarships(): void {
    if (!this.searchTitle.trim()) {
      this.loadScholarships();
      return;
    }
    
    this.loading = true;
    this.error = null;
    console.log('Searching scholarships with title:', this.searchTitle);
    
    this.dashboardService.searchScholarships(this.searchTitle).subscribe(
      (data: Scholarship[]) => {
        console.log('Search results:', data);
        this.scholarships = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error searching scholarships', error);
        this.error = 'Ocorreu um erro ao pesquisar bolsas. Por favor, tente novamente.';
        this.loading = false;
      }
    );
  }

  resetSearch(): void {
    console.log('Resetting search');
    this.searchTitle = '';
    this.loadScholarships();
  }

  getAverageAmount(): number {
    if (this.scholarships.length === 0) return 0;
    const total = this.scholarships.reduce((sum, scholarship) => sum + scholarship.amount, 0);
    return total / this.scholarships.length;
  }
}