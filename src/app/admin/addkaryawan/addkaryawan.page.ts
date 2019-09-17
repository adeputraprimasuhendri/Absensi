import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-addkaryawan',
  templateUrl: './addkaryawan.page.html',
  styleUrls: ['./addkaryawan.page.scss'],
})
export class AddkaryawanPage implements OnInit {
  data = {
    nip: '',
    nama: '',
    bagian: ''
  }
  constructor(private db:DatabaseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  simpan(){
    this.db.addKaryawan(this.data).then((res)=>{
      alert("Data Tersimpan !");
      let navigationExtras: NavigationExtras = {
      };
      this.router.navigateByUrl('/karyawan', navigationExtras);
    });
  }

}
