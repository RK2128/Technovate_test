import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { EmpClass } from '../emp-class';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {
  Emp=new EmpClass("","",new  Date('1/1/1'),"",0);  //initializing to default values
  Employees:EmpClass[]=[];
  index:number;

  myForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
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
  constructor(public dialogRef: MatDialogRef<InsertEmployeeComponent>) {}

  ngOnInit() {
    this.Employees=JSON.parse(localStorage.getItem("Employee"));
  }

  onInsert(){
    this.Emp.Emp_fname=this.myForm.controls['fname'].value;
    this.Emp.Emp_lname=this.myForm.controls['lname'].value;
    this.Emp.Emp_Email=this.myForm.controls['email'].value;
    this.Emp.Emp_phone=this.myForm.controls['phone'].value;
    this.Emp.Emp_DOB=this.myForm.controls['date'].value;
    this.Employees.push(this.Emp);
    console.log(this.Employees);
    localStorage.setItem("Employee",JSON.stringify(this.Employees));
    this.dialogRef.close("insert");
  }

  onClose(){
    this.dialogRef.close("close");
  }
}
