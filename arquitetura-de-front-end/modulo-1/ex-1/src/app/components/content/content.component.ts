import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() posts?: any[];
  post?: any;
  @Output() postSelected = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectPostItem(post: any) {
    this.postSelected.emit(post);
    this.post = post;
    // this.router.navigate([post.link]);
  }

  clean() {
    this.postSelected.emit(null);
    this.post = null;
  }

}
