import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item/item.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';
import { NavbarService } from 'app/navbar/service/navbar.service';
import { expandInOut } from '../animations/expand-in-out.animation';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [expandInOut]
})
export class ListComponent implements OnInit {
  public items: Observable<Array<Item>>;
  public item: Item;
  public showNewItem: boolean;

  constructor(
    private itemService: ItemService,
    private navbarService: NavbarService
  ) { }

  ngOnInit() {
    this.items = this.itemService.get();
    this.showNewItem = false; // TODO: MIGRATE TO SERVICE!
    // this.item = this.getNewItem();
    this.navbarService.showItem();

    this.navbarService.addItem.subscribe(() => {
      this.showNewItem = true;
      this.item = this.getNewItem();
    });
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
    item.created = new Date(); // create new date now
    this.itemService.create(item);
    this.showNewItem = false;
    this.item = this.getNewItem();
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
