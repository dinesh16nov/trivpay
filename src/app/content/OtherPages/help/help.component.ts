import { Component, OnInit } from '@angular/core';
import { APIUrl } from '../../../enums/emums';

@Component({
  selector: 'aditya-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  dominname: string = APIUrl.DomainName;
  constructor() { }

  ngOnInit() {
  }

}
