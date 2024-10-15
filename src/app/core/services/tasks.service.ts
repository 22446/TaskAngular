import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
private _httpclient=inject(HttpClient)
  GetAllTasks():Observable<any>{
    return this._httpclient.get(`${env.baseUrl}/todos`)
  }
}
