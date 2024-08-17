import { HttpEvent, HttpInterceptorFn, HttpRequest, HttpHandlerFn } from "@angular/common/http";
import { inject } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { finalize, Observable } from "rxjs";

let countRequest = 0;

export const loadingInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const spinner = inject(NgxSpinnerService);
  
  // Incrementar la cuenta de solicitudes
  countRequest++;
  // Mostrar el spinner al inicio de la solicitud
  spinner.show();

  return next(req).pipe(
    finalize(() => {
      // Decrementar la cuenta de solicitudes cuando finalice la solicitud
      countRequest--;
      // Ocultar el spinner solo si no hay solicitudes pendientes
      if (countRequest === 0) {
        spinner.hide();
      }
    })
  );
};

// @Injectable(
//   {
//     providedIn: "root"
//   }
// )

// export class LoadingInterceptor implements HttpInterceptor{
//   private countRequest = 0;
//   constructor(private spinner: NgxSpinnerService ){
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     console.log("Loading: Interceptor")
//       this.spinner.show();
//       this.countRequest++;

//       return next.handle(req).pipe(finalize( ()=>{
//         this.countRequest--;
//         if(!this.countRequest){
//           this.spinner.hide();
//         }
//       }));
//   }
// }