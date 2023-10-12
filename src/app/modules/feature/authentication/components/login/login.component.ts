import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm:any = FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder, private router: Router){
    if(localStorage.getItem('userToken') == 'LoginSuccess'){
      this.router.navigate(['app/home']);
    }
  }
  
  get f() { return this.loginForm.controls; }
  onSubmit() {
  
  this.submitted = true;
  if (this.loginForm.invalid) {
      return;
  }

  if(this.submitted)
  {
    console.log(this.loginForm.value.email);
    if(this.loginForm.value.email == 'admin@admin.com' && this.loginForm.value.password == '12345'){
      localStorage.setItem('userToken','LoginSuccess');
    this.router.navigate(['app/home']);

    }
    else{
      alert("Invalid credentials!!!");
    }
    
  }
 
}

  ngOnInit(): void {
    //Add User form validations
    this.loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
    });
  }
}

