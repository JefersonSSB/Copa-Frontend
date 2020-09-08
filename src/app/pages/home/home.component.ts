import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  header: String;
  description: String;

  constructor() { }

  ngOnInit(): void {
  }

  public getHeader() {
    return this.header = localStorage.getItem('header');
  }

  public getDescription() {
    return this.description = localStorage.getItem('description');
  }

}
