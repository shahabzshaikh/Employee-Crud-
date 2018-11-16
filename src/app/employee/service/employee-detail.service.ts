import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeDetail } from '../employee-detail.model';


@Injectable()
export class EmployeeDetailService {
  
   // URL of web api
  public employeeDataUrl = "api/employeeDetail"  
  
  constructor(private http: HttpClient) { }

  //////// Get methods //////////
  /** GET Employee Details from the server */
  getEmployeeDetail (): Observable<EmployeeDetail[]> {

    return this.http.get<EmployeeDetail[]>(this.employeeDataUrl) 
  }


   //////// Save methods //////////
  /** POST: add a new Employee Details to the server */
  addEmployeeDetail (employee: EmployeeDetail): Observable<EmployeeDetail> {

    return this.http.post<EmployeeDetail>(this.employeeDataUrl, employee)
  }


  /////////Delete methos ///////////
  /** DELETE: Delete the Employee Details on server */
  deleteEmployeeDetail (id: EmployeeDetail): Observable<EmployeeDetail> {

    return this.http.delete<EmployeeDetail>(this.employeeDataUrl+'/'+id)
  }

}
