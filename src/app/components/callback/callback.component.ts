import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

export interface Profesion {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  profesiones: Profesion[] = [
    {value: '1', viewValue: 'Ingeniero'},
    {value: '2', viewValue: 'Profesor'},
    {value: '3', viewValue: 'Estudiante'}
  ];

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.handleAuthCallback();
  }

}
