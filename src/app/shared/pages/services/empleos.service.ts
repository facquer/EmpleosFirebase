import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Empleo } from '../../model/empleo';

@Injectable({
  providedIn: 'root'
})
export class EmpleosService {
  constructor(private afs: AngularFirestore) { }

  getEmpleos(): Observable<any[]> {
    return this.afs.collection('empleos', 
    ref => ref.orderBy('titulo')).valueChanges();
  }

  getEmpleo(uid: string): Observable<Empleo> {
    let itemDoc = this.afs.doc<any>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }

  insertEmpleo(empleo: Empleo){
    const refEmpleo = this.afs.collection('empleos');
    empleo.uid = this.afs.createId();
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, {merge: true});
  }

  editarEmpleo(empleo: Empleo) {
    const refEmpleo = this.afs.collection('empleos');
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, {merge: true});
  }

  deleteEmpleo(uid: string){
    return this.afs.doc<any>(`empleos/${uid}`).delete();
  }

}
