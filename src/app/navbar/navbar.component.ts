import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentLang: string ;
  constructor(public translate:TranslateService) {
    this.currentLang= localStorage.getItem('currentLang')|| 'FR';
    this.translate.use(this.currentLang);
   }

  ngOnInit(): void {
  }
  changeCurrentLang(lang:string){
    this.translate.use(lang);
    localStorage.setItem('currentLang',lang);
  }
}
