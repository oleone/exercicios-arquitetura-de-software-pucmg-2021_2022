import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title?: string;
  @Input() subtitle?: string | null;
  @Input() imageUrl?: string;
  @Input() class?: string | null;

  constructor() { }

  ngOnInit(): void {
  }

}
