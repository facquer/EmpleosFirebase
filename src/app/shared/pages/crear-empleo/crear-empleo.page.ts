import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';
import { EmpleosService } from '../services/empleos.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  empleo: Empleo = new Empleo();

  constructor(private empleosService: EmpleosService,  private route: ActivatedRoute,public router: Router) { }

  ngOnInit() {
  }
  guardarEmpleo() {
    console.log(this.empleo);
    this.empleosService.insertEmpleo(this.empleo);
    this.router.navigate(['lista-empleos'])
  }

  imagenCargada(e){
    this.empleo.image = e;
  }


}
