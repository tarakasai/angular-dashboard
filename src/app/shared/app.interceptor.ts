import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class ServiceInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const ID_TOKEN = localStorage.getItem('id_token');
    if (ID_TOKEN) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + ID_TOKEN)
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }

}
