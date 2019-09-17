import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-karyawan',
  templateUrl: './karyawan.page.html',
  styleUrls: ['./karyawan.page.scss'],
})
export class KaryawanPage implements OnInit {
  data:any;
  constructor(private db:DatabaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getKaryawan();
  }
  getKaryawan(){
    this.db.getKaryawan().then((data)=>{
      this.data = JSON.parse(data.data);
      console.log(JSON.parse(data.data));
    })
  }
  hapus(id){
    this.db.delKaryawan(id).then((data)=>{
      alert("Data Terhapus !");
      this.getKaryawan();
    }, (err)=>{
      console.log(err);
    })
  }
  tambah(){
    let navigationExtras: NavigationExtras = {
    };
    this.router.navigateByUrl('/addkaryawan', navigationExtras);
  }

}
