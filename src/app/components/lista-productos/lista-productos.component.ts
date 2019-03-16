import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

	public title: string;
  constructor(private _route: ActivateRoute,
  	private _router: Router) { 
  	this.title = 'listado de listado de productos';
  }

  ngOnInit() {
  }

}
