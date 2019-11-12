import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-preview-first-template",
  templateUrl: "./preview-first-template.component.html",
  styleUrls: ["../first-template.component.css"]
})
export class PreviewFirstTemplateComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
