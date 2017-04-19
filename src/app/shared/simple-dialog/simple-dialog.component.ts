import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-simple-dialog',
  template: `
      <h2 md-dialog-title>{{title}}</h2>
      <md-dialog-content [innerHtml]=message></md-dialog-content>
  `,
  styleUrls: ['./simple-dialog.component.css']
})
export class SimpleDialogComponent implements OnInit {

  public message: string;
  public title: string;

  constructor(public dialogRef: MdDialogRef<SimpleDialogComponent>) { }

  ngOnInit() {
  }
}
