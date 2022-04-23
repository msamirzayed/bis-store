import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
   styles: [`
  .example-pizza-party {
    color: hotpink;
  }
`],
})
export class SnackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
