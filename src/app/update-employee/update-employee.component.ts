import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmpClass } from '../emp-class';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  Emp: EmpClass;
  Employees:EmpClass[]=[];
  index:number;

  myForm = new FormGroup({
    email: new FormControl(''),
    fname: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z]+$")
    ]),
    lname: new FormControl('', [
      Validators.required,
      Validators.pattern("^[a-zA-Z]+$")
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
      Validators.pattern("^[7-9][0-9]+$")
    ]),
    date: new FormControl('', [
      Validators.required
    ])
  });
  constructor(public dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Emp = data.emp;
    this.myForm.setValue({
      fname: this.Emp.Emp_fname,
      lname: this.Emp.Emp_lname,
      email: this.Emp.Emp_Email,
      phone: this.Emp.Emp_phone,
      date: this.Emp.Emp_DOB
    });
  }
  ngOnInit() {
    this.Employees=JSON.parse(localStorage.getItem("Employee"));
    this.index=JSON.parse(localStorage.getItem("Employee")).findIndex(data => data.Emp_Email == this.Emp.Emp_Email);
  }

  onUpdate(){
    this.Emp.Emp_fname=this.myForm.controls['fname'].value;
    this.Emp.Emp_lname=this.myForm.controls['lname'].value;
    this.Emp.Emp_Email=this.myForm.controls['email'].value;
    this.Emp.Emp_phone=this.myForm.controls['phone'].value;
    this.Emp.Emp_DOB=this.myForm.controls['date'].value;
    this.Employees[this.index]=this.Emp;  //replacing the element with the updated one.
    console.log(this.Employees);
    localStorage.setItem("Employee",JSON.stringify(this.Employees));
    this.dialogRef.close("update");
  }

  onClose(){
    this.dialogRef.close("close");
  }
}
