import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from '../service/employee-detail.service';
import { EmployeeDetail } from '../employee-detail.model';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  public viewEmployeeDetails: EmployeeDetail[];

  constructor(private viewEmployeeService: EmployeeDetailService) { }

  ngOnInit() {

    this.getEmployee();
  }

  /**
   * This method are use of Display the employee record.
   * Get the data from service.
   */
  getEmployee(): void {
    this.viewEmployeeService.getEmployeeDetail()
    .subscribe(employee => this.viewEmployeeDetails = employee);
  }
  
  /**
   * This method are create for delete the employe Details.
   * @param employee - The create the object of model class.
   */
  deleteEmployeeData(employee: EmployeeDetail): void {
    this.viewEmployeeDetails = this.viewEmployeeDetails.filter(f => f !== employee);
    this.viewEmployeeService.deleteEmployeeDetail(employee).subscribe(
      (employee) => alert('Employee record successfully deleted.')
    );
  }

}
