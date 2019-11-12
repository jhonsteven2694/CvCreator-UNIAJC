import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

export interface Profesion {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-callback",
  templateUrl: "./callback.component.html",
  styleUrls: ["./callback.component.css"]
})
export class CallbackComponent implements OnInit {
  profesiones: Profesion[] = [
    { value: "/header", viewValue: "Ingeniero" },
    { value: "/header", viewValue: "Profesor" },
    { value: "/header", viewValue: "Estudiante" }
  ];

  constructor(private auth: AuthService, private router: Router) {}

  navigateTo(value) {
    if (value) {
      this.router.navigate([value]);
    }
    return false;
  }

  ngOnInit() {}
}
