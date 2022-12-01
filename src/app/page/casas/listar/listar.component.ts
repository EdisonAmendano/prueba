import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Casa } from 'src/app/Domine/casas';
import { CasaService } from 'src/app/services/casa.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  casas: any

  constructor(
    private router: Router,
    private casaService: CasaService
    ){}

  ngOnInit(): void {
    this.loadCasas()
  }

  loadCasas(){
    this.casas = this.casaService.getProductsFire()

    console.log(this.casas)
  }

}
