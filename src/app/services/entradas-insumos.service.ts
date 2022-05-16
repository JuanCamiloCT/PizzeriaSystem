import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EntradasInsumosService {

  constructor(private firestore:AngularFirestore) { }

  AgregarEntradaInsumo(entradaInsumo:any):Promise<any>{
    return this.firestore.collection('entradaInsumo').add(entradaInsumo);
  }
  getEntradaInsumo():Observable<any> {
    return this.firestore.collection('entradaInsumo', ref => ref.orderBy('id','asc')).snapshotChanges();
  }
  getEntradaInsumoOnly(id: string):Observable<any> {
    return this.firestore.collection('entradaInsumo').doc(id).snapshotChanges();
  }
  eliminarEntradaInsumo(id: string): Promise<any> {
    return this.firestore.collection('entradaInsumo').doc(id).delete();
  }
  actualizarEntradaInsumo(id: string, data:any): Promise<any> {
    return this.firestore.collection('entradaInsumo').doc(id).update(data);
  }
}
