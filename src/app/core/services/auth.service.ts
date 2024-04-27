
import {Injectable} from "@angular/core";
import {BehaviorSubject, map, Observable} from "rxjs";
import {environment} from "../../enviroment/environment";
import {User} from "../models/user.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorServices {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(
      JSON.parse(localStorage.getItem('this.currentUser') || '{}') //`${this.currentUser}`
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(user: User) {
    return this.http
      .post<any>(environment.apiUrl + `Login`, user)
      .pipe(
        map((user) => {
          console.log(user);
          if (user && user.token) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
          }
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.currentUserSubject.next(null);
  }
}
