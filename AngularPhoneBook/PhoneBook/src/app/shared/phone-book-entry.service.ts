import { Injectable } from '@angular/core';
import { PhoneBookEntry } from './phone-book-entry.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookEntryService {
  
  formData  : PhoneBookEntry;
  list : PhoneBookEntry[];
  readonly rootURL ="http://localhost:7741/api"

  constructor(private http : HttpClient) { }
  postPhoneBookEntry(formData : PhoneBookEntry){
    return this.http.post(this.rootURL+'/PhoneBookEntry',formData);
  }
    refreshList(){
      this.http.get(this.rootURL+'/PhoneBookEntry')
      .toPromise().then(res => this.list = res as PhoneBookEntry[]);
    }

    putPhoneBookEntry(formData : PhoneBookEntry){
      return this.http.put(this.rootURL+'/PhoneBookEntry/'+formData.Id,formData);       
     }

     deletePhoneBookEntry(id : number){
      return this.http.delete(this.rootURL+'/PhoneBookEntry/'+id);
     }   
}
