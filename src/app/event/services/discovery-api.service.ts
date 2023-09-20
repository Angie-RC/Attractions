import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DiscoveryApiService {
  apikey: string = "RRlsE0zPJGfT1GVpeNBbbmF84GKe3OAy"
  urlBase: string = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=usa&apikey="
  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get(`${this.urlBase}${this.apikey}`);
  }

}
