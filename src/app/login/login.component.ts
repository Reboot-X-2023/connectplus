import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {


  constructor( 
    private route: ActivatedRoute,
    private liveAnnouncer: LiveAnnouncer,
    private router: Router) { }

    ngOnInit() {

    }
  
    onSubmit() {
      //this.liveAnnouncer.announce('User Login Successful');
      this.router.navigate(['dashboard']);

    }
  }
  