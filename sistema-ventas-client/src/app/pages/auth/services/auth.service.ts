import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isPlatformBrowser } from '@angular/common';


const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = new BehaviorSubject<String>("");
  private tokenData = new BehaviorSubject<any>({});
  private isLogged = new BehaviorSubject<boolean>(false);


  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.checkToken();
   }
   get token$(){
    return this.token.asObservable();
   }

   get tokenValue(){
    return this.token.getValue();
   }
   
   get tokenData$(){
    return this.tokenData.asObservable();
   }

   get isLogged$(){
    return this.isLogged.asObservable();
   }

  login(loginData: any){
    return this.http.post(`${ environment.API_URL }/auth`, loginData)
      .pipe(map((data: any) =>{
        if (data.token){
          this.saveLocalStorage(data.token);
          this.token.next(data.token);
          this.isLogged.next(true);
          this.checkToken();
          this.router.navigate(['/home']);
        }
        return data;
      }),
    catchError((error)=> this.handleError(error)));

  }
  saveLocalStorage(token: string){
    localStorage.setItem("jwt", token);
  }

  logOut(){
    if(isPlatformBrowser(this.platformId)){
      localStorage.removeItem("jwt");
    }
    this.token.next("");
    this.tokenData.next(null);
    this.isLogged.next(false);

    this.router.navigate(['/home'])
  }

  checkToken(){
    var token: string | null = '';
    if(isPlatformBrowser(this.platformId)){
      token = localStorage.getItem("jwt");
    }
    if(token){
      const isExpired = helper.isTokenExpired(token);
      if(isExpired) this.logOut()
        else{this.token.next(token)}
      //Renovamos los datos del usuarip
      const {iat, exp, ...data} = helper.decodeToken(token);
      this.tokenData.next(data);
      this.isLogged.next(true);
    }else{
      this.logOut();
    }
  }
  private handleError(error: any){
    var message = 'Ocurrio un error';
    if (error.error){
      message = error.message;
      if(error.error) message = error.error.message;
    }else message = 'Ocurrio un error'
    this.snackBar.open(message, '',{
      duration:3000
    })
    return throwError(()=> new Error(message));
  }
}
