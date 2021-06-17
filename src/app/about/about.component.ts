import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';
import { ServerHttpService } from '../Services/server-http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name = '';
  public age = '';
  public comments:any;
  public posts = [];

  constructor(private common: CommonService, private serverHttp: ServerHttpService) {
      
  }

  ngOnInit(): void {
    this.serverHttp.getProfile().subscribe((data) => {
      console.log('print profile:',data);
      this.name = data.name;
      this.age = data.age;
    });
    this.serverHttp.getComments().subscribe((data) => {
      console.log('print comments:',data);
      this.comments = data;
    });
    this.serverHttp.getposts().subscribe((data) => {
      console.log('print posts:',data);
      this.posts = data;
    });
  }

  public addPost() {
    const newData = { title: 'testing', author: 'author testing' };
    //const data = [];
    this.serverHttp.addPosts(newData).subscribe((data) => {
      console.log('addPost:', data);
      this.posts.push(data);
    });
  }

  public tangtuoi() {
    //this.common.age++;
  }

}
