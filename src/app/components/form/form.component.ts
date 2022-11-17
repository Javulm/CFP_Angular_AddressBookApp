import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBook } from 'src/app/model/addressbook';
import { AddressbookserviceService } from 'src/app/service/addressbookservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  fullname: String = "";
  name: String[] = [];

  constructor(private service: AddressbookserviceService, private router: Router, private route: ActivatedRoute) { }
  addressBook: AddressBook = new AddressBook("", "", "", "", "", "", "", 0);
  id: any = this.route.snapshot.paramMap.get("id");
  ngOnInit(): void {
    if (this.id != null) {
      this.service.getAddressBookById(this.id).subscribe((data: any) => {
        this.addressBook = data.data;
        this.fullname = `${this.addressBook.firstname} ${this.addressBook.lastname}`;
      })
    }
  }
  addPerson() {
    this.nameSeparator();
    this.service.addAddressBookData(this.addressBook).subscribe((data: any) => {
      console.log(this.addressBook);
      alert("Person details added")
      this.router.navigate(["/"]);
    })
  }
  onCancel() {
    this.router.navigate(["/"]);
  }
  nameSeparator() {
    this.name = this.fullname.split(" ");
    this.addressBook.firstname = this.name[0];
    this.addressBook.lastname = this.name[1];
  }
  updateById(personId: number) {
    this.nameSeparator();
    this.service.updateAddressBookById(personId, this.addressBook).subscribe((data: any) => {
      console.log(this.addressBook);
      alert("Person details updated")
      this.router.navigate(["/"])
    })
  }
}
