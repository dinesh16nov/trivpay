import { Component, OnInit } from '@angular/core';
import { APIUrl } from '../../../enums/emums';

@Component({
  selector: 'aditya-termsconditions',
  templateUrl: './termsconditions.component.html',
  styleUrls: ['./termsconditions.component.css']
})
export class TermsconditionsComponent implements OnInit {
  dominname: string = APIUrl.DomainName;
  dominwebsite: string = APIUrl.DominWebsite;
  constructor() { }

  ngOnInit() {
  }

}
