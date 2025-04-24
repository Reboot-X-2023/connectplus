import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor( 
    private route: ActivatedRoute,
    private router: Router) { }

    productp() {
      this.router.navigate(['product']);
  
    }
    dash() {
      this.router.navigate(['dashboard']);
  
    }

}
