import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

	public title: string;
  constructor(private _route: ActivatedRoute,
  	private _router: Router) { 
  	this.title = 'listado de listado de productos';
  }

  ngOnInit() {
  }

}
