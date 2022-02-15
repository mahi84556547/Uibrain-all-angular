import { Contact } from './../Shared/contact';
import { ContactsService } from './../services/contacts.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css'],
})
export class ContactlistComponent implements OnInit {
  public contactsData: Contact[] = [] as Contact[];
  public errorMessage: string | undefined;
  @Output() sendData = new EventEmitter();

  constructor(public https: ContactsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.https.getAllContact().subscribe(
      (dat) => {
        this.contactsData = dat;
        console.log(dat);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  infoContact(d: Contact) {
    this.sendData.emit(d);
  }
}
