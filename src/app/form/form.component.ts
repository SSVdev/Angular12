import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public name = '';
  public password = '';
  public vehicles = ['Toyota','Honda','Nissan','Ford','Mustang'];
  private selectedvehicle = '';

  constructor() { }
  ngOnInit(): void {
  }

  public onSubmit() {
    console.log('name = ', this.name);
    console.log('pass = ', this.password);
    console.log('vehicles = ', this.selectedvehicle);
  }
  public selectVehicles(event:any): void {
    console.log('selectVehicles:', event.target.value);
    this.selectedvehicle = event.target.value;
  }

}
