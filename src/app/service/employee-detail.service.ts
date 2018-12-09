import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeDetail } from '../employee/employee-detail.model';


@Injectable()
export class EmployeeDetailService {

  // URL of web api
  public employeeDataUrl = "http://localhost:3000/employeeDetail"

  constructor(private http: HttpClient) { }

  //////// Get methods //////////
  /** GET Employee Details from the server */
  getEmployeeDetail(): Observable<EmployeeDetail[]> {

    return this.http.get<EmployeeDetail[]>(this.employeeDataUrl)
  }
}
