import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	providers: [UserService]
})
export class LoginComponent implements OnInit{
	public title: String;
	public user: User;
	public identity;
	public token: any;
	public status: string;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _userService: UserService
	){
		this.title = 'Identificate';
		this.user = new User('','','','','','ROLE_USER','');
	}

	ngOnInit(){
		console.log('login.component cargado !!');

		console.log(this._userService.getIdentity());
		console.log(this._userService.getToken());
	}

	onSubmit(){
		// Loguear al usuario y conseguir el objeto
		this._userService.signup(this.user).subscribe(
      (response: {user: User, token: string}) => {
				this.identity = response.user;

				if(!this.identity || !this.identity._id){
					alert('El usuario no se ha logueado correctamente');
				}else{
					this.identity.password = '';
					localStorage.setItem('identity', JSON.stringify(this.identity));

						// Conseguir el token
						this._userService.signup(this.user, 'true').subscribe(
              (response: {token: any}) => {
								this.token = response.token;

								if(this.token.length <= 0){
									alert('El token no se ha generado');
								}else{
									localStorage.setItem('token', this.token);
									this.status = 'success';

									this._router.navigate(['/']);
								}
							},
							error => {
								console.log(<any>error);
							}
						);
				}
			},
			error => {
				console.log(error);
					this.status = 'error';

			}
		);
	}
}
