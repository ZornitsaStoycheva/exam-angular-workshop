import { Injectable, OnDestroy } from '@angular/core';
import { AuthUser, User, UserId } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Subscription, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
 
  
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined
  USER_KEY = '[authUser]';

  // get isAuthenticated(): boolean {
  //   return !!this.user
  // }

   subscription: Subscription;

   constructor(private http: HttpClient) {
    
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
      this.USER_KEY = user?._id || '';
      console.log(this.USER_KEY)
      console.log(this.user?.username)
      
    })
  
    }

    get isAuthenticated(): boolean {
      return !!this.user
    }

   login(email: string, password: string) {
    const { apiUrl } = environment;
    
    return this.http.post<User>(`/api/users/login`, { email, password })
    .pipe(tap((user) => this.user$$.next(user)))
  }

   register(email: string, username: string, password: string, rePassword: string) {
    const { apiUrl } = environment;
    
    return this.http.post<User>('/api/users/register', { email, username, password, rePassword})
    .pipe(tap((user) => this.user$$.next(user)))
   }

   getProfile() {
    return this.http.get<User>('/api/users/profile').pipe(tap((user) => this.user$$.next(user)))
   }

   updateProfile(username:string, email: string) {
    return this.http.put<User>('/api/users/profile', { username, email})
    .pipe(tap((user) => this.user$$.next(user)))
   }

   logout() {
    return this.http.post<User>('/api/users/logout', {})
    .pipe(tap((user) => this.user$$.next(undefined)))
   }

   ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  }
