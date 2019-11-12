import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm = this.fb.group({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  hide = true;

  constructor(private fb: FormBuilder) { }

  getErrorMessage() {
    return this.loginForm['email'].hasError('required') ? 'You must enter a value' :
        this.loginForm['email'].hasError('email') ? 'Not a valid email' :
            '';
  }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.loginForm.value);
  }

}
