import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MatInputModule } from '@angular/material';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() toggleSearch = new EventEmitter();
  @Output() search = new EventEmitter();
  @Input() searchString: string;
  constructor() { }

  ngOnInit() {
  }
  emitToggleSearch() {
    this.toggleSearch.emit();
  }

  emitSearch(searchString: string) {
    this.search.emit(searchString);
  }
}
