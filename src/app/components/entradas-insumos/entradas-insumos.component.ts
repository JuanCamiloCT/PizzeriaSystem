import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntradasInsumosService } from 'src/app/services/entradas-insumos.service'

@Component({
  selector: 'app-entradas-insumos',
  templateUrl: './entradas-insumos.component.html',
  styleUrls: ['./entradas-insumos.component.css']
})
export class EntradasInsumosComponent implements OnInit {
  createEntradaInumos: FormGroup;
  uppdateEntradaInumos: FormGroup;
  submitted = false;
  messageSucess = false;
  key = '';
  entradasInsumos: any[] = [];

  constructor(private fb: FormBuilder, private _entradasInsumosService: EntradasInsumosService) {
    this.createEntradaInumos = this.fb.group({
      id: ['', Validators.required],
      fechaEntrada: ['', Validators.required],
      valorTotal: ['', Validators.required],
      lote: ['', Validators.required],
    });
    this.uppdateEntradaInumos = this.fb.group({
      id: ['', Validators.required],
      fechaEntrada: ['', Validators.required],
      valorTotal: ['', Validators.required],
      lote: ['', Validators.required],
    })
  }
  agregarNuevaEntradaInsumo() {
    this.submitted = true;
    if (this.createEntradaInumos.invalid) {
      return;
    }
    const entradaInsumo: any = {
      id: this.createEntradaInumos.value.id,
      fechaEntrada: this.createEntradaInumos.value.fechaEntrada,
      valorTotal: this.createEntradaInumos.value.valorTotal,
      lote: this.createEntradaInumos.value.lote,
    }
    console.log(entradaInsumo);
    this._entradasInsumosService.AgregarEntradaInsumo(entradaInsumo).then(() => {
      this.entradasInsumos = [];
      this.messageSucess = true;
      setTimeout(() => { this.messageSucess = false; }, 3000)
    });
  }
  getEntradasInsumos() {
    this._entradasInsumosService.getEntradaInsumo().subscribe(data => {
      data.forEach((element: any) => {
        this.entradasInsumos.push({
          key: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
    })
    console.log(this.entradasInsumos);
  }
  eliminarEntradaInsumos(id: string) {
    this._entradasInsumosService.eliminarEntradaInsumo(id).then(() => {
      console.log('Eliminado con exito!');
      this.entradasInsumos = [];
      window.location.reload();
    });
  }
  editarEntradaInsumos() {
    const uppdateEntradaInumos: any = {
      id: this.uppdateEntradaInumos.value.id,
      fechaEntrada: this.uppdateEntradaInumos.value.fechaEntrada,
      valorTotal: this.uppdateEntradaInumos.value.valorTotal,
      lote: this.uppdateEntradaInumos.value.lote,
    }
    this._entradasInsumosService.actualizarEntradaInsumo(this.key, uppdateEntradaInumos).then(() => {
      this.entradasInsumos = [];
      this.messageSucess = true;
      setTimeout(() => { this.messageSucess = false; }, 3000)
    })
  }
  esEditar(id: string) {
    this.key = id;
    if (id !== null) {
      this._entradasInsumosService.getEntradaInsumoOnly(id).subscribe(data => {
        this.uppdateEntradaInumos.setValue({
          id: data.payload.data()['id'],
          fechaEntrada: data.payload.data()['fechaEntrada'],
          valorTotal: data.payload.data()['valorTotal'],
          lote: data.payload.data()['lote'],
        })
      })

    }
  }
  ngOnInit(): void {
    this.getEntradasInsumos();
  }
}
