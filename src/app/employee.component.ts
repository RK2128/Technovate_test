import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpClass } from './emp-class';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatSnackBar } from '@angular/material';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ["Emp_fname", "Emp_lname", "Emp_DOB", "Emp_Email", "Emp_phone", "Action"];
  dataSource: any;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase(); // Remove whitespace // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  E1: EmpClass[];

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar) { }
  ngOnInit() {
    this.dataSource = new MatTableDataSource<EmpClass>(JSON.parse(localStorage.getItem("Employee")));
    this.E1 = this.dataSource;
  }

  onUpdate(E: EmpClass) {
    let dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '80%',
      data: { emp: E }
    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed'+result);
      if (result != "close") {
        this.dataSource = JSON.parse(localStorage.getItem("Employee"));
        let snackBarRef = this.snackBar.open('Record Updated.', 'OK', {
          duration: 2000
        });
      }
    });
  }

  onInsert() {
    let dialogRef = this.dialog.open(InsertEmployeeComponent, {
      width: '80%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
      if (result != "close") {
        this.dataSource = JSON.parse(localStorage.getItem("Employee"));
        let snackBarRef = this.snackBar.open('Record Inserted.', 'OK', {
          duration: 2000
        });
      }
    });
  }

  onDelete(E: EmpClass) {
    this.dataSource = JSON.parse(localStorage.getItem("Employee")).filter(data => data.Emp_Email !== E.Emp_Email);
    localStorage.setItem("Employee", JSON.stringify(this.dataSource));
    let snackBarRef = this.snackBar.open('Record Deleted.', 'OK', {
          duration: 2000
    });
  }

}
