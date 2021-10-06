import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-item-list',
  templateUrl: './post-item-list.component.html',
  styleUrls: ['./post-item-list.component.scss']
})
export class PostItemListComponent implements OnInit {

  @Input() post: any;

  @Output() click = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  doPost(post: any) {
    this.click.emit(post);
  }

}
