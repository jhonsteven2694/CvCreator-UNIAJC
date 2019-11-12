import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private fb: FormBuilder, public auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.loginForm.value);
  }

}
