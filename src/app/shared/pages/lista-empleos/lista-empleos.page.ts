import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { EmpleosService } from '../services/empleos.service';
import { Router } from '@angular/router';
import { Empleo } from '../../model/empleo';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit {
  
  empleados: Observable<any[]>;

  constructor(private empleosService: EmpleosService, public router: Router) {}

  ngOnInit() {
    this.empleados = this.empleosService.getEmpleos();
  }

  showEmpleo(id: any) {
    this.router.navigate([`empleo/${id}`]);
  }

  showCrearEmpleo() {
    this.router.navigate([`crear-empleo`]);
  }

  showCrearEmpleoId(id: any) {
    this.router.navigate([`editar-empleo/${id}`]);
  }
  trackByFn(index, obj) {
    return obj.uid;
  }
}
