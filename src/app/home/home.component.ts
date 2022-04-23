import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db:AngularFireDatabase ) { }

  ngOnInit(): void {
 
  }

}
