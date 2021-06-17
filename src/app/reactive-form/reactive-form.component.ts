import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  //public name = new FormControl('');
  public  profileForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public updateName() {
    //this.name.setValue('Hao Nguyen');
  }
  public onSubmit() {
    //console.warn(this.profileForm.value);
    console.log('onSubmit');
    console.log(this.profileForm);
    console.log('Name:', this.profileForm.controls.name.value);
    console.log('Age:', this.profileForm.controls.age.value);
  }

}
