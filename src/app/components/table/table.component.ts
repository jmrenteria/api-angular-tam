import { Component, OnInit } from '@angular/core';

interface IColumnType {
  code: string;
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
      code: "0",
      name: "Placeholder",
      age: 1
    },
    {
      code: "1",
      name: "Placeholder",
      age: 7
    },
    {
      code: "3",
      name: "Placeholder",
      age: 19
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

  constructor() { }

  ngOnInit() {
    this.countAge();
  }

}
