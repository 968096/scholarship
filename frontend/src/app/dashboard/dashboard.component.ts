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
}