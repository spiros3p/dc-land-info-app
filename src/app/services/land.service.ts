import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  public land: any;

  constructor(
    private http: HttpClient
  ) { }

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }
    )
  };

  private basePath = environment.landsApiURL;



  public fetchLand(id: any): Observable<any> {
    const url = `${this.basePath}/lands/${id}`;
    return this.http.get(url, this.httpOptions);
  }

}
