import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = 'http://192.168.101.111:3000/api/v1';
// const URL = 'http://192.168.101.71:3000/api/v1';

@Injectable()
export class ApiService {
  constructor(public http: HttpClient) { }
  getCompanySectors(id: number) {
    return this.http.get(`${URL}/sectors/company/${id}`);
  }
  getCompanySections(id: number) {
    return this.http.get(`${URL}/sections/${id}`);
  }
  getCompanySensor(id: number) {
    return this.http.get(`${URL}/sensors/machine/${id}`);
  }
  getSensorData(id: number) {
    return this.http.get(`${URL}/sensors/${id}/start/1/end/1`);
  }

}
