import { Component, OnInit } from '@angular/core';
import { EmpleosService } from '../services/empleos.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Empleo } from '../../model/empleo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-empleo',
  templateUrl: './editar-empleo.page.html',
  styleUrls: ['./editar-empleo.page.scss'],
})
export class EditarEmpleoPage implements OnInit {

  empleo: Observable<any>;
  //empleoNormal: Empleo = new Empleo();


  constructor(private empleosService: EmpleosService,  private route: ActivatedRoute,public router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.empleo = this.empleosService.getEmpleo(id);
  }

  guardarEmpleo(empleo: Empleo) {
    this.empleosService.editarEmpleo(empleo);
    this.router.navigate(['lista-empleos'])
  }

}
