import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  scholarships: any[] = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadScholarships();
  }

  loadScholarships(): void {
    this.dashboardService.getScholarships().subscribe(
      (data: any[]) => {
        this.scholarships = data;
      },
      (error) => {
        console.error('Error fetching scholarships', error);
      }
    );
  }
}