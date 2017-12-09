import * as firebase from 'firebase/app';
export interface User {
  uid?: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  lastLoginDate?: Date;
}
