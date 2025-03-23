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
    // Melhorado o tratamento para termos de busca vazios
    if (!this.searchTitle.trim()) {
      this.loadScholarships();
      return;
    }
    
    this.loading = true;
    this.error = null;
    
    // Limpar espaços extras e fazer trim no termo de busca
    const searchTerm = this.searchTitle.trim();
    console.log('Searching scholarships with title:', searchTerm);
    
    this.dashboardService.searchScholarships(searchTerm).subscribe(
      (data: Scholarship[]) => {
        console.log('Search results:', data);
        console.log('Search result count:', data.length);
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