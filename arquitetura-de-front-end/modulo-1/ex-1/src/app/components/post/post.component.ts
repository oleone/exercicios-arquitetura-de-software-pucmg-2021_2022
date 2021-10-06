import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post?: any;
  @Output('back') backed = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  back() {
    this.backed.emit(null);
  }

}
