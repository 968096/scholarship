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

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadScholarships();
  }

  loadScholarships(): void {
    this.dashboardService.getScholarships().subscribe(
      (data: Scholarship[]) => {
        this.scholarships = data;
      },
      (error) => {
        console.error('Error fetching scholarships', error);
      }
    );
  }

  searchScholarships(): void {
    this.dashboardService.searchScholarships(this.searchTitle).subscribe(
      (data: Scholarship[]) => {
        this.scholarships = data;
      },
      (error) => {
        console.error('Error searching scholarships', error);
      }
    );
  }

  resetSearch(): void {
    this.searchTitle = '';
    this.loadScholarships();
  }

  getAverageAmount(): number {
    if (this.scholarships.length === 0) return 0;
    const total = this.scholarships.reduce((sum, scholarship) => sum + scholarship.amount, 0);
    return total / this.scholarships.length;
  }
}