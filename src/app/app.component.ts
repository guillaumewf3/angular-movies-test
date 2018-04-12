import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  movies = null;

  constructor(private http: HttpClient){
  
  }
  
  ngOnInit(): void {
    this.http.get('http://localhost/movies-imie/public/api/v1/movies').subscribe(data => {
      this.title = "done";
      this.movies = data;
      console.log(data);
    });
  }
}
