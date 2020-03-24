import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  employeeForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.employeeForm=new FormGroup({
      name:new FormControl(),
      email:new FormControl(), 
    });
  }
  onSubmit():void{
    name:''
    email:''
    console.log(this.employeeForm.value)
  }

  }

