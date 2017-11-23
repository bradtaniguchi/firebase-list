import {trigger, animate, transition, style} from '@angular/animations';

export const growInOut = trigger('growInOut', [
  transition(':enter', [
    style({
      transform: 'scale(.1)',
      // opacity: 0
    }),
    animate('200ms', style({
      transform: 'scale(1)',
      // opacity: 1
    }))
  ]),
  transition(':leave', [
    style({
      transform: 'scale(1)',
      // opacity: 0
    }),
    animate('200ms', style({
      transform: 'scale(.1)',
      // opacity: 0
    }))
  ])
]);
