import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  salespersonlist: SalesPerson[]=[new SalesPerson("Hassan", "irfan", 50000,"hassan@gmail.com"),
  new SalesPerson("kamran", "ali", 40000,"k@gmail.com"),
  new SalesPerson("awais", "wattoo", 30000,"A@gmail.com"),
  new SalesPerson("noor", "kamran", 10000,"NK@gmail.com")]

}
