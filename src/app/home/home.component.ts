import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public ten ='Hao Nguyen';
  public tuoi;
  public vehicles = ['Toyota','Honda','Nissan','Ford','Mustang'];
  public price = 120;

  constructor(private common: CommonService) { 
    this.tuoi = common.age;
  }

  ngOnInit(): void {
  }

  public tangtuoi() {
    this.common.age++;
    this.tuoi = this.common.age;
    // if(this.tuoi === 20){
    //   this.ten = 'NTH'
    // }
    //this.vehicles.push(this.ten + ':'+ this.tuoi);
  }

}
