import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import { GLOBAL } from './global';

@Injectable()
export class UserService {
	public url: string;
	public identity;
	public token;

	constructor(    
		private _http: HttpClient,
	){
		this.url = GLOBAL.url;
	}

	register(user_to_register){
		let params = JSON.stringify(user_to_register);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
		return this._http.post(this.url+'register', params, {headers: headers});
	}

	signup(user_to_login, gettoken = null){
		if(gettoken != null){
			user_to_login.gettoken = gettoken;
		}

	    const headers = new HttpHeaders({
	      'Content-Type': 'application/json',
	    });
		return this._http.post(this.url+'login', user_to_login, {headers: headers});
	}

	getIdentity(){
		let identity = JSON.parse(localStorage.getItem('identity'));

		if(identity != "undefined"){
			this.identity = identity;
		}else{
			this.identity = null;
		}

		return this.identity;
	}

	getToken(){
		let token = localStorage.getItem('token');

		if(token != "undefined"){
			this.token = token;
		}else{
			this.token = null;
		}

		return this.token; 
	}

	updateUser(user_to_update){

	    const headers = new HttpHeaders({
	      'Content-Type': 'application/json',
	      Authorization: localStorage.getItem('token')
	    });

		return this._http.put(this.url+'update-user/'+user_to_update._id, user_to_update, {headers: headers});
	}

	getKeepers(){
		return this._http.get(this.url+'keepers');
	}
}
