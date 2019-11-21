import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee.component';
import { MatTableModule,MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatGridListModule, MatDialogModule, MatDatepickerModule, DateAdapter, MatNativeDateModule, MatSnackBarModule } from '@angular/material';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UpdateEmployeeComponent,
    InsertEmployeeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UpdateEmployeeComponent,
    InsertEmployeeComponent
  ]
})
export class AppModule { }
