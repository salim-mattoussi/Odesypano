import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { Domain1Component } from '../domain1/domain1.component';
import { Domain2Component } from '../domain2/domain2.component';
import { Domain3Component } from '../domain3/domain3.component';
import { Domain4Component } from '../domain4/domain4.component';


@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.component.html',
  styleUrls: ['./domaine.component.scss']
})
export class DomaineComponent implements OnInit {

  constructor(public dialog: MatDialog, public translate :TranslateService) {
   }

   openDialog1(){
    this.dialog.open(Domain1Component);
   }
   openDialog2(){
    this.dialog.open(Domain2Component);
   }
   openDialog3(){
    this.dialog.open(Domain3Component);
   }
   openDialog4(){
    this.dialog.open(Domain4Component);
   }

  ngOnInit(): void {
  }

}
