import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
	PRODUCTS: any[] = [
							{id:1, nombre: "Libro", precio:"200"},
							{id:2, nombre: "cuaderno", precio:"30"}
							];

	constructor() { }

	getProductos(): any[] {
	  return this.PRODUCTS;
	}
}
