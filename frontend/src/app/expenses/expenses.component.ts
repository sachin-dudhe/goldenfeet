import { Component, OnInit } from '@angular/core';

declare var $:any;

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  public tableData1: TableData;


  constructor() { }

  ngOnInit() {
    this.tableData1 = {
      headerRow: [ 'Expense Type', 'C02 Emission'],
      dataRows: [
          ['Travel', 'High'],
          ['Household', 'Medium'],
          ['Product', 'Low']
      ]
  };
  }
  showNotification(from, align){
      const type = ['','info','success','warning','danger'];

      var color = Math.floor((Math.random() * 4) + 1);
      $.notify({
          icon: "pe-7s-gift",
          message: "Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer."
      },{
          type: type[color],
          timer: 1000,
          placement: {
              from: from,
              align: align
          }
      });
  }
}
