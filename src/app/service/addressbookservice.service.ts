import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddressbookserviceService {

  constructor(private http: HttpClient) { }

  getAddressBookData() {
    return this.http.get("http://localhost:8081/home/getall");
  }
  addAddressBookData(addressBook: any) {
    return this.http.post("http://localhost:8081/home/add", addressBook);
  }

  getAddressBookById(id: any) {
    return this.http.get("http://localhost:8081/home/get/" + id)
  }
  updateAddressBookById(id: any, addressBook: any) {
    return this.http.put("http://localhost:8081/home/update/" + id, addressBook)
  }
  deleteAddressBookById(id: any) {
    return this.http.delete("http://localhost:8081/home/delete/" + id)
  }

}
