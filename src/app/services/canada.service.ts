import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CanadaService {

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get('https://dl.dropboxusercontent.com/s/2iodh4vg0eortkl/facts.json');
  }
}
