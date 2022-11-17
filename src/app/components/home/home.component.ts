import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddressBook } from 'src/app/model/addressbook';
import { AddressbookserviceService } from 'src/app/service/addressbookservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  addressBook: AddressBook[] = [];
  constructor(private router: Router, private service: AddressbookserviceService) { }
  displayedColumns: string[] = ['name', 'email', 'phonenumber', 'address', 'city', 'state', 'pincode', 'Action'];
  dataSource = new MatTableDataSource<AddressBook>(this.addressBook);

  ngOnInit(): void {
    this.service.getAddressBookData().subscribe((data: any) => {
      this.dataSource.data = data.data as AddressBook[];
      this.addressBook = data.data;
      console.log(this.addressBook);
    })
  }
  editById(id: number) {
    this.router.navigate(['update', id])
  }
  onAddPerson() {
    this.router.navigate(['form']);
  }
  deleteById(id: number) {
    this.service.deleteAddressBookById(id).subscribe((data: any) => {
      this.ngOnInit();
      this.router.navigate(['/']);
    })
  }
}
