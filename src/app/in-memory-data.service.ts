import { InMemoryDbService } from 'angular-in-memory-web-api';
import { EmployeeDetail } from './employee/employee-detail.model';


export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    /**
     * create a dummy Database.
     * Asign the value of array.
     */
    const employeeDetail: EmployeeDetail[] = [
      { 
        id: 101, 
        employeeName: 'Shahbaz', 
        age: 21,
        designation: 'HR',
        joiningDate: new Date('2015-12-10')  
      },
      { 
        id: 102, 
        employeeName: 'Shahu', 
        age: 25,
        designation: 'Devloper',
        joiningDate: new Date('2018-08-12')
      }
    ];
    return {employeeDetail};
  }

  // Overrides the genId method to ensure that a employee always has an id.
  // If the employeDetails array is empty,
  // the method below returns the initial number (101).
  // if the employeDetails array is not empty, the method below returns the highest
  // Employee id + 1.
  genId(employeeDetail: EmployeeDetail[]): number {
    return employeeDetail.length > 0 ? Math.max(...employeeDetail.map(employeeDetail => employeeDetail.id)) + 1 : 101;
  }
  
}
