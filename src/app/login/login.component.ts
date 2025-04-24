import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  constructor( 
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {

    }
  
    onSubmit() {
      this.router.navigate(['dashboard']);

    }
  }
  