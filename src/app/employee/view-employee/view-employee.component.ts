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
  total = 0;
  page = 1;
  limit = 20;
  constructor(private viewEmployeeService: EmployeeDetailService) { }

  ngOnInit(): void {

    this.getEmployee();
  }

  /**
   * This method are use of Display the employee record.
   * Get the data from service.
   */
  getEmployee(): void {

    this.viewEmployeeService.getEmployeeDetail({ page: this.page, limit: this.limit })
      .subscribe(res => {
        this.total = res.total;
        this.viewEmployeeDetails = res.viewEmployeeDetails;
      });
  }

  goToPage(n: number): void {
    this.page = n;
    this.getEmployee();
  }

  onNext(): void {
    this.page++;
    this.getEmployee();
  }

  onPrev(): void {
    this.page--;
    this.getEmployee();
  }

}
