import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {
  data={name:'raju',role:'web-developer'}
  constructor() { }
  provideData()
  {
    return this.data;
  }
}
