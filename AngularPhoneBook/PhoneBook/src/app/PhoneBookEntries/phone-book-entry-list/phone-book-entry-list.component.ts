import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PhoneBookEntryService } from 'src/app/shared/phone-book-entry.service';
import { PhoneBookEntry } from 'src/app/shared/phone-book-entry.model';

@Component({
  selector: 'app-phone-book-entry-list',
  templateUrl: './phone-book-entry-list.component.html',
  styleUrls: ['./phone-book-entry-list.component.css']
})
export class PhoneBookEntryListComponent implements OnInit {

  constructor(private service: PhoneBookEntryService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  populateForm(phonebookentry: PhoneBookEntry) {
    this.service.formData = Object.assign({}, phonebookentry);
  }
  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePhoneBookEntry(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'PhoneBookEntry. Register');
      });
    }
  }
}
