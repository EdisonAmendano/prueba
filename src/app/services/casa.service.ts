import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Casa } from '../Domine/casas';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  lstCasas = new Array()

  private casasCollection : AngularFirestoreCollection<Casa>

  casas: any

  constructor(private afs: AngularFirestore) { 
    this.casasCollection = afs.collection<Casa>('casas')
  }

  getProductsFire(){
    return this.casasCollection.valueChanges();
  }
}
