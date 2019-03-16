import { Component } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7';

  public toggleTitle(){
  	console.log('Le has dado clic al botón');
  	$('.title').slideToggle();
  } 
}
