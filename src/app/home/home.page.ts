import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lokasi:any;
  constructor(private db:DatabaseService, private camera: Camera, private geolocation: Geolocation) { }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(base64Image);
    }, (err) => {
      console.log(err);
    });
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lokasi = "Lokasi Anda ( Lat : "+resp.coords.latitude+", Long : "+resp.coords.longitude+" )";
      console.log(resp.coords.latitude+"::"+resp.coords.longitude);
     }).catch((error) => {
       console.log(error);
     });
  }

}
