import { Contact } from './../Shared/contact';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactapp',
  templateUrl: './contactapp.component.html',
  styleUrls: ['./contactapp.component.css'],
})
export class ContactappComponent implements OnInit {
public sendContactDetails: Contact = {} as Contact;


  constructor() {}

  ngOnInit(): void {}
}
