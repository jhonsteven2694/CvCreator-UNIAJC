import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-second-template',
  templateUrl: './second-template.component.html',
  styleUrls: ['./second-template.component.css']
})
export class SecondTemplateComponent implements OnInit {

  constructor(public pruebaService: PruebaService) { }

  ngOnInit() {
    this.pruebaService.getUsers()
      .subscribe(
        users => console.log(users),
        err => console.log(err)
      )
  }

}
