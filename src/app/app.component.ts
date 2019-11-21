import { Component } from '@angular/core';
import { EmpClass } from './emp-class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Technovate-test';
  //static data to display some records on Home
  Emp:EmpClass[]=[
    {Emp_fname: "keyur",Emp_lname: "rathod",Emp_DOB: new Date("1996-12-25"),Emp_Email: "rathodkeyur2128@gmail.com",Emp_phone:9033527706},
    {Emp_fname: "Rakesh",Emp_lname: "raut",Emp_DOB: new Date("1997-2-5"),Emp_Email: "rautrakesh@gmail.com",Emp_phone:9123233432},
    {Emp_fname: "manish",Emp_lname: "shrivastava",Emp_DOB: new Date("1993-10-10"),Emp_Email: "manishshrivastava@gmail.com",Emp_phone:9238472373},
    {Emp_fname: "pankaj",Emp_lname: "tripathi",Emp_DOB: new Date("1990-1-8"),Emp_Email: "pankajtripathi@gmail.com",Emp_phone:9238472374},
    {Emp_fname: "raj",Emp_lname: "patel",Emp_DOB: new Date("1997-12-1"),Emp_Email: "rajpatel@gmail.com",Emp_phone:9238472375},
    {Emp_fname: "parth",Emp_lname: "soni",Emp_DOB: new Date("1998-2-10"),Emp_Email: "parthsoni@gmail.com",Emp_phone:9238472376},
    {Emp_fname: "jignesh",Emp_lname: "panchal",Emp_DOB: new Date("1993-8-2"),Emp_Email: "jigneshpanchal@gmail.com",Emp_phone:9238472377}
  ];

  ngOnInit() {
    console.log(localStorage.getItem("Employee"));
    localStorage.setItem("Employee",JSON.stringify(this.Emp));
  }
}
