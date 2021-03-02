import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../rest-api.service";
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', email: '', phone: 0, age:0}
  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addEmployee() {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list'])
    })
  }

}
