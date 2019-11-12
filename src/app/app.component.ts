import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "cv-creator-app";
  isLoading = true;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.localAuthSetup();

    this.isLoading = true;

    this.auth.handleAuthCallback().subscribe(
      ([user, loggedIn]) => {
        this.isLoading = false;
        // Redirect to target route after callback processing
        if (user !== null && loggedIn !== null) {
          this.router.navigate(["callback"]);
        }
      },
      error => {
        this.isLoading = false;
      }
    );
  }
}
