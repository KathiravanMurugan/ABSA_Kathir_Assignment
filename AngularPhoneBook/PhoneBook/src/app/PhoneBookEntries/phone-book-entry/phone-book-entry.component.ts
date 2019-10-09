import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PhoneBookEntryService } from 'src/app/shared/phone-book-entry.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-phone-book-entry',
  templateUrl: './phone-book-entry.component.html',
  styleUrls: ['./phone-book-entry.component.css']
})
export class PhoneBookEntryComponent implements OnInit {

  constructor(private service: PhoneBookEntryService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      Id: null,
      Name: '', 
      PhoneNumber: ''
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPhoneBookEntry(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'PhoneBookEntry. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putPhoneBookEntry(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'PhoneBookEntry. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}
