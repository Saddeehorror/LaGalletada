import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})


export class ConfirmComponent implements OnInit {
  @Input() displayModal

  constructor() { }

  ngOnInit() {
  }

}
