import { Injectable } from '@angular/core';
//import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';

import { GLOBAL } from './global';
import {RequestOptions} from '@angular/http';

@Injectable()
export class AnimalService{
	public url: string;

	constructor(private _http: HttpClient){
		this.url = GLOBAL.url;
	}

	addAnimal(token, animal){
		
	    const headers = new HttpHeaders({
	      'Content-Type': 'application/json',
	      Authorization: localStorage.getItem('token')
	    });

		return this._http.post(this.url + 'animal', animal, {headers: headers});
	}

	getAnimals(){
		return this._http.get(this.url + 'animals');
	}


	getAnimal(id){
		return this._http.get(this.url + 'animal/' + id);
	}

	editAnimal(token, id, animal){

	    const headers = new HttpHeaders({
	      'Content-Type': 'application/json',
	      Authorization: localStorage.getItem('token')
	    });

		return this._http.put(this.url+'animal/' + id, animal, {headers: headers});
	}

	deleteAnimal(token, id){
	    const headers = new HttpHeaders({
	      'Content-Type': 'application/json',
	      Authorization: localStorage.getItem('token')
	    });

		//let options = new HttpParams({headers: headers});
		return this._http.delete(this.url + 'animal/' + id, {headers: headers});
	}
}
