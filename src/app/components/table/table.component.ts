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

  column: string = "Placeholder";
  table: IColumnType[] = [
    {
      code: "0",
      name: "Placeholder"
    }
  ];

  constructor() { }

  ngOnInit() {}

}
