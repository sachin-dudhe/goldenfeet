import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-accountstmt',
  templateUrl: './accountstmt.component.html',
  styleUrls: ['./accountstmt.component.css']
})
export class AccountStmtComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Date', 'Description', 'Credit/Debit', 'Amount', 'Total Balance', 'C02 Balance'],
          dataRows: [
              ['06-Oct-2019', 'Jones Meat shop', 'Dr', '500', '36,738', '1245'],
              ['04-Oct-2019', 'BP Petrol', 'Dr', '1000', '37,238', '1260'],
              ['03-Oct-2019', 'Big Basket Grocery', 'Dr', '200', '37,438', '1275'],
              ['03-Oct-2019', 'Big Basket Milk', 'Dr', '100', '37,538', '1310'],
              ['01-Oct-2019', 'Eco Friendly NGO', 'Dr', '500', '38,038', '1250'],
              ['01-Oct-2019', 'Make my trip flight', 'Dr', '2500', '40,538', '1350']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };
  }

}
