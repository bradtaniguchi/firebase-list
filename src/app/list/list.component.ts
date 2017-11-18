import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../services/items/items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public items: Array<any>;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

}
