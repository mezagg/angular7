import {Component, DoCheck, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {GLOBAL} from './services/global';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  public identity;
  public url: string;
  title: string;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'angular7';
    this.url = GLOBAL.url;
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

  public toggleTitle(){
  	console.log('Le has dado clic al botón');
  	$('.title').slideToggle();
  }


}
