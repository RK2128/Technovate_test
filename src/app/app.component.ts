import { Component } from '@angular/core';
import { EmpClass } from './emp-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Technovate-test';
  //some static data to display
  Emp:EmpClass[]=[
    {Emp_fname: "keyur",Emp_lname: "rathod",Emp_DOB: new Date("1996-12-25"),Emp_Email: "rathodkeyur2128@gmail.com",Emp_phone:9033527706},
    {Emp_fname: "Rakesh",Emp_lname: "raut",Emp_DOB: new Date("1997-2-5"),Emp_Email: "rautrakesh@gmail.com",Emp_phone:9123233432},
    {Emp_fname: "manish",Emp_lname: "shrivastava",Emp_DOB: new Date("1993-10-10"),Emp_Email: "manishshrivastava@gmail.com",Emp_phone:9238472373}
  ];

  ngOnInit() {
    console.log(localStorage.getItem("Employee"));
    localStorage.setItem("Employee",JSON.stringify(this.Emp));
  }
}
