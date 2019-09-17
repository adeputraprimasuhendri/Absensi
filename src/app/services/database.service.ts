import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HTTP) { }

  addKaryawan(data){
    const body = data;
    const options = {
    };
    return this.http.post(environment.baseURL+'karyawan', body, options);
  }

  getKaryawan(){
    const body = {};
    const options = {};
    return this.http.get(environment.baseURL+'karyawan', body, options);
  }

  delKaryawan(id){
    const body = {};
    const options = {};
    return this.http.delete(environment.baseURL+'karyawan/'+id, body, options);
  }

  addAbsen(data){
    const body = data;
    const options = {
    };
    return this.http.post(environment.baseURL+'absensi', body, options);
  }

  getAbsen(){
    const body = {};
    const options = {};
    return this.http.get(environment.baseURL+'absensi', body, options);
  }

}
