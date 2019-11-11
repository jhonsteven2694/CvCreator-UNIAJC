import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  hide = true;

  constructor(private fb: FormBuilder) { }

  

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.loginForm.value);
  }

}
