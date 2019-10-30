import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ManagementDTO } from 'src/app/model/ManagementDTO.model';
import { GrantedAuthority } from 'src/app/model/GrantedAuthority.model';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<ManagementDTO>;
  public currentUser: Observable<ManagementDTO>;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('isLoggedin')) {
      this.currentUserSubject = new BehaviorSubject<ManagementDTO>(JSON.parse(localStorage.getItem('isLoggedin')));
      this.currentUser = this.currentUserSubject.asObservable();
    } else {
      this.currentUserSubject = new BehaviorSubject<ManagementDTO>(null);
    }
  }
  public get currentUserValue(): ManagementDTO {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let user = new ManagementDTO(username, password, window.btoa(username + ':' + password));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + user.authData
      })
    };
    return this.http.get<string[]>(`${environment.apiUrl}/login`, httpOptions)
      .pipe(map(authorities => {
        if (authorities.includes('ROLE_MANAGEMENT')) {
          this.currentUserSubject.next(user);
          localStorage.setItem('isLoggedin', JSON.stringify(user));
          return true;
        }
        return false;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('isLoggedin');
    this.currentUserSubject.next(null);
  }
}