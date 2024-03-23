import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-my-publish',
  templateUrl: './my-publish.component.html',
  styleUrls: ['./my-publish.component.css']
})
export class MyPublishComponent implements OnInit{

  book = {} as Book as any;
  user = {} as User as any;
  constructor(private apiService: ApiService, private activateRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    debugger
    this.activateRoute.params.subscribe((data) => {
      const id = data['user._id'];
      const useId = '65f73e112f5f3a8aaff5e492';
      const ownerId = data['_onerId'];
      const user_ownerId = '65f73e112f5f3a8aaff5e492'
      this.apiService.getMyPublish().subscribe((book) => {
        console.log({book})
        if(useId === user_ownerId) {
          this.book = book;
        }
        
      })
    }
    )
  }

}
