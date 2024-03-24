import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Book } from 'src/app/types/book';
import { User } from 'src/app/types/user';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-my-publish',
  templateUrl: './my-publish.component.html',
  styleUrls: ['./my-publish.component.css']
})
export class MyPublishComponent implements OnInit{

  book = {} as Book as any;
  
  constructor(private apiService: ApiService, private activateRoute: ActivatedRoute, private userService: UserService) {}
  
  ngOnInit(): void {
    
    
    }
}
