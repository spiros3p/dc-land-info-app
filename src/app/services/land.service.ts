import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  land: any;

  constructor(
    private http: HttpClient
  ) { }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }
    )
  };

  private basePath = environment.apiURL + '/admin';

  fetchLand(id:any){

  }

}
