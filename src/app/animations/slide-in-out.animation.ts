import {trigger, animate, transition, style} from '@angular/animations';

export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({transform: 'translateX(100%)', opacity: 0}),
    animate('300ms', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ]),
  transition(':leave', [
    style({transform: 'translateX(0)', opacity: 0}),
    animate('300ms', style({
      transform: 'translateX(100%)',
      opacity: 0
    }))
  ])
]);
