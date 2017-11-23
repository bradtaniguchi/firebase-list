import {trigger, animate, transition, style} from '@angular/animations';

export const expandInOut = trigger('expandInOut', [
  transition(':enter', [
    style({
      height: 0,
      overflow: 'hidden'
    }),
    animate('200ms', style({
      height: '40px',
      overflow: 'hidden'
    }))
  ]),
  transition(':leave', [
    style({
      height: '40px',
      overflow: 'hidden'
    }),
    animate('200ms', style({
      height: 0,
      overflow: 'hidden'
    }))
  ])
]);
