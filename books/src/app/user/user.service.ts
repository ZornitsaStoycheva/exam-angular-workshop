import { Injectable, OnDestroy } from '@angular/core';
import { AuthUser, User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Subscription, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
 
  
  private user$$ = new BehaviorSubject<User |undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: User | undefined
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user
  }

   subscription: Subscription;

   constructor(private http: HttpClient) {
    
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
      console.log(this.user)
      console.log('[user]')
    })
    // try {
    //   const lsUser = localStorage.getItem(this.USER_KEY) || '';
    //   this.user = JSON.parse(lsUser);

    // } catch (error) {
    //   this.user = undefined;
    // }
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

   logout() {
    // this.user = undefined;
    // localStorage.removeItem(this.USER_KEY);
    return this.http.post<User>('/logout', {})
    .pipe(tap((user) => this.user$$.next(undefined)))
    //.pipe(tap((user) => this.user$$.next(undefined)))
   }

   ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  }
