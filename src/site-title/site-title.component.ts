import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'site-title',
  templateUrl: './site-title.component.html',
  styleUrls: ['./site-title.component.css']
})
export class SiteTitle {
  constructor(private ref: ChangeDetectorRef) {
  }
  
  ngOnInit() {
  }
}


