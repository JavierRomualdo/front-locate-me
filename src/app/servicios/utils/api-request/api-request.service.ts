import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { UtilService } from '../util/util.service';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private headers = new HttpHeaders();

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) { }

  appendAuthHeader(): HttpHeaders {
    this.headers = new HttpHeaders({ 
      "Content-Type": "application/json"
    });
    return this.headers;
  }

  get(url: string): Promise<any> {
    return this.http
      .get(environment.url + url, {
        headers: this.appendAuthHeader()
      })
      .toPromise()
      .then(resp => resp)
      .catch(err => this.utilService.handleError(err));
  }

  post(url: string, objeto: Object): Promise<any> {
    return this.http
      .post(environment.url + url, objeto, {
        headers: this.appendAuthHeader()
      })
      .toPromise()
      .then(resp => resp)
      .catch(err => this.utilService.handleError(err));
  }

  put(url: string, objeto: Object): Promise<any> {
    return this.http
      .put(environment.url + url, objeto, {
        headers: this.appendAuthHeader()
      })
      .toPromise()
      .then(resp => resp)
      .catch(err => this.utilService.handleError(err));
  }

  delete(url: string): Promise<any> {
    return this.http
      .delete(environment.url + url, {
        headers: this.appendAuthHeader()
      })
      .toPromise()
      .then(resp => resp)
      .catch(err => this.utilService.handleError(err));
  }
}
