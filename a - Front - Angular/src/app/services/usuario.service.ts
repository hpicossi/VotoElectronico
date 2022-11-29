import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '../models/Token';
import { User } from '../models/User';
const TOKEN_KEY = 'auth-token';
const role = 'role';
const token='token';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
    constructor(private http : HttpClient, ) {this.currentUserSubject = new  BehaviorSubject<Token>(JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}'));
    this.currentUser = this.currentUserSubject.asObservable(); }

    currentUserSubject: BehaviorSubject<Token>;
    currentUser: Observable<Token>;
    loggedIn= new BehaviorSubject<boolean>(false);

    register (username : string, lastname: string, password : string, email : string, name : string, dni : string,
        phone : string) : Observable<Token> {
        return this.http.post<Token>(`${environment.API_URL}/register`, {
            username,
            lastname,
            password,
            email,
            name,
            dni,
            phone
        })
    }

    login (username : string, password : string) : Observable<Token> {
        return this.http.post<Token>(`${environment.API_URL}/login`, {
            username,
            password,
        }).pipe(map(data => {
          localStorage.setItem(TOKEN_KEY, JSON.stringify(data.token));
          this.currentUserSubject.next(data);
          this.loggedIn.next(true);
          return data;
    }))
  }
    ObtenerUsuario(username:string |null )
    {
      return this.http.get<any>(`${environment.API_URL}/api/users/${username}`);
    }

    createToken (username : string) : Observable<Token> {
        return this.http.post<Token>(`${environment.API_URL}/api/create-token`, {
            username
        });
    }

    getUsers () : Observable<User[]> {
        return this.http.get<User[]>(`${environment.API_URL}/api/users`);
    }

    getUser (id : string) : Observable<User> {
        return this.http.get<User>(`${environment.API_URL}/api/users/${id}`);
    }

    getUserById (id : string) : Observable<User> {
      return this.http.get<User>(`${environment.API_URL}/api/users/id/${id}`);
  }

    getUserByToken () : Observable<User> {
        return this.http.get<User>(`${environment.API_URL}/user`, {
            headers: new HttpHeaders({
              'Authorization': 'Bearer ' + localStorage.getItem('token'),
              'Content-Type': 'application/json'
            })
        });
    }

    updateUser (id : string, username : string, lastname: string, password : string, email : string, name : string, dni : string,
      phone : string) : Observable<User> {
        return this.http.put<User>(`${environment.API_URL}/api/users/${id}`, {
          username,
          lastname,
          password,
          email,
          name,
          dni,
          phone
        })
    }

    deleteUser (id : number) : Observable<any> {
        return this.http.delete(`${environment.API_URL}/api/users/${id}`);
    }

    get usuarioAutenticado(): Token {
      return this.currentUserSubject.value;
    }


    get estaAutenticado(): Observable<boolean> {
      return this.loggedIn.asObservable();
    }

    logOut(): void {
      window.sessionStorage.clear();
      localStorage.removeItem(TOKEN_KEY);
      localStorage.removeItem(role);
      localStorage.removeItem(token);
      localStorage.clear();
      this.loggedIn.next(false);
    }

}

