import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeeDetailService } from '../service/employee-detail.service';
import { EmployeeDetail } from '../employee-detail.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  
  public addEmployee: EmployeeDetail[];
  public designation;

  constructor(private addEmployeeService: EmployeeDetailService, private fb:  FormBuilder) {
    
    // add value  in designation drop down
    this.designation = [
      "CEO",
      "HR",
      "IT Opreation",
      "Developer",
      "Tester"
    ];
  }
    // reactive form validation
    addEmployeeForm = this.fb.group({
      id: [],
      employeeName: ['', Validators.required],
      age: ['', Validators.required],
      designation: ['', Validators.required],
      joiningDate: ['', Validators.required]
    });


  ngOnInit() {}

  /**
   * This method are create of submit the data and send on server.
   * @param employeeDetails
   */
  onSubmit(employeeDetails){

    let changeDate =
      employeeDetails.joiningDate.month +
      "/" +
      employeeDetails.joiningDate.day +
      "/" +
      employeeDetails.joiningDate.year;

    console.log(changeDate);

    employeeDetails.joiningDate = changeDate;

    // Rest the form after Submit data
    this.addEmployeeForm.reset();
   
    //they are push the data on server.
    this.addEmployeeService.addEmployeeDetail(employeeDetails)
        .subscribe(employee => {
          this.addEmployee.push(employee);
          alert('Employee Record Inserted.');
    });
  }

}
