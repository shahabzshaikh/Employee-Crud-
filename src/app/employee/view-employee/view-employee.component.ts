import { Component, OnInit, Injectable } from '@angular/core';
import { EmployeeDetail } from '../employee-detail.model';
import { EmployeeDetailService } from '../../service/employee-detail.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})

export class ViewEmployeeComponent implements OnInit {

  public viewEmployeeDetails: EmployeeDetail[];
  public rows = [];
  public currentPageLimit: number = 10;
  public currentVisible: number = 3;
  public readonly pageLimitOptions = [
    {value: 5},
    {value: 10},
    {value: 25},
    {value: 50},
    {value: 100},
  ];
  public readonly visibleOptions = [
    {value: 1},
    {value: 3},
    {value: 5},
    {value: 10},
  ];
  table: any;
  constructor(private viewEmployeeService: EmployeeDetailService) { }

  ngOnInit(): void {

    this.getEmployee();
  }

  /**
   * This method are use of Display the employee record.
   * Get the data from service.
   */
  getEmployee(): void {

    this.viewEmployeeService.getEmployeeDetail()
      .subscribe(employee => {
        this.viewEmployeeDetails = employee;
      });
  }

  // TODO[Dmitry Teplov] wrap dynamic limit in a separate component.
  public onLimitChange(limit: any): void {
    this.changePageLimit(limit);
    this.table.limit = this.currentPageLimit;
    this.table.recalculate();
    setTimeout(() => {
      if (this.table.bodyComponent.temp.length <= 0) {
        // TODO[Dmitry Teplov] find a better way.
        // TODO[Dmitry Teplov] test with server-side paging.
        this.table.offset = Math.floor((this.table.rowCount - 1) / this.table.limit);
        // this.table.offset = 0;
      }
    });
  }

  public onVisibleChange(visible: any): void {
    this.currentVisible = parseInt(visible, 10);
  }

  private changePageLimit(limit: any): void {
    this.currentPageLimit = parseInt(limit, 10);
  }

}
