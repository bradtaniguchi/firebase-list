import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items/items.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items: Observable<Array<Item>>;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    console.log('test: ', this.route);
    // this.route.snapshot.data['items'];
    this.items = this.itemsService.get();
    console.log('items: ', this.items);
  }

}
