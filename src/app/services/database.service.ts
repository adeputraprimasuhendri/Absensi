import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HTTP) { }

  addKaryawan(data){
    const body = data;
    const options = {
    };
    return this.http.post('https://api.ideatech.co.id/karyawan', body, options);
  }

  getKaryawan(){
    const body = {};
    const options = {};
    return this.http.get('https://api.ideatech.co.id/karyawan', body, options);
  }

  addAbsen(data){
    const body = data;
    const options = {
    };
    return this.http.post('https://api.ideatech.co.id/absen', body, options);
  }

  getAbsen(){
    const body = {};
    const options = {};
    return this.http.get('https://api.ideatech.co.id/absen', body, options);
  }

}
