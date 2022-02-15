import { Contact } from './../Shared/contact';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {


  @Input() sendContact:Contact = {} as Contact;
  constructor() { }

  ngOnInit(): void {
  }
isNotEmpty(){
  return Object.keys(this.sendContact).length > 0;
}
}
