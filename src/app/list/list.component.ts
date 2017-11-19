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
  public item: Item;
  public showNewItem: boolean;

  constructor(
    private itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.items = this.itemsService.get();
    this.showNewItem = false;
    this.item = this.getNewItem();
  }

  /**
   * Shows the current Edit item fields.
   * @param item - the item to edit
   */
  edit(item: Item) {
    console.log('not ready yet!');
  }

  /**
   * Cancels the current addition of a new item
   */
  cancel() {
    this.item = this.getNewItem();
    this.showNewItem = false;
  }
  /**
   * Creates a new item from the given item
   * @param item - the item to create
   */
  submit(item: Item) {
    console.log('submit: ', item);
    //TODO: add actual submit here
  }

  /**
   * Saves the given item to the database
   * @param item - the item to save
   */
  save(item: Item) {
    console.log('not ready yet!');
  }
  /**
   * Creates a new item
   */
  getNewItem(): Item {
    return {
      name: '',
      description: '',
      amount: 0
    };
  }
  /**
   * Utility function to stop propagation
   * @param event - mouse click event
   */
  stopProp(event: MouseEvent) {
    event.stopPropagation();
  }
}
