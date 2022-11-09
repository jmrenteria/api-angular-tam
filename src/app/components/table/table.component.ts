import { Component, OnInit } from '@angular/core';

interface IColumnType {
  name: string;
  age?: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  countOld: number = 0;
  countYng: number = 0;
  column: string = "Placeholder";
  table: IColumnType[] = [
    {
      name: "Placeholder",
      age: 1
    }
  ];

  countAge() {
    for (let item of this.table) {
      if (item.age > 17) {
        this.countOld++;
      } else {
        this.countYng++;
      }
    }
  }

  validateType() {
    for (let item of this.table) {
      if (item.age) {
        this.column = "Edad";
      } else {
        this.column = "Estudiantes";
      }
    }
  }

  constructor() { }

  ngOnInit() {
    this.countAge();
    this.validateType();
  }

}
