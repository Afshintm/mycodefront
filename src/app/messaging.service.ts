// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireDatabase } from '@angular/fire/database';
// import * as firebase from 'firebase';
// import { take } from 'rxjs/operators';
// import { BehaviorSubject } from 'rxjs';

import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import * as firebase from 'firebase';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagingService {
  private messaging = firebase.messaging();

  currentMessage = new BehaviorSubject(null);
  currentToken = new BehaviorSubject(null);

  constructor(
    // private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {
    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {
        console.log("_messaging", _messaging);
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
        // _messaging.setBackgroundMessageHandler = _messaging.setBackgroundMessageHandler.bind(_messaging);
      }
    );
  }

  /**
   * this will call our backend API to save token the user's FCM token
   * the BE api will send whatever data it needs to the user with the following request:
   * POST https://fcm.googleapis.com/fcm/send
   * Content-Type: application/json
   * Authorization:key=
   * {
   * notification": {
   *  "title": "title",
   *  "body": " this is a push notification to firebase"
   * },
   * "to": "the token" // the user's token
   * }
   *
   * @param userId userId as a key
   * @param token token as a value
   */
  updateToken(userId, token) {
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token;
        this.currentToken.next(token);
        // this.angularFireDB.object('fcmTokens/').update(data);
      });
  }

  /**
   * request permission for notification from firebase cloud messaging
   *
   * @param userId userId
   */
  requestPermission(userId) {
    this.angularFireMessaging.requestToken.subscribe(
      (token) => {
        console.log(token);
        this.updateToken(userId, token);
      },
      (err) => {
        console.error('Unable to get permission to notify.', err);
      }
    );
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      });
  }


  // Listen for token refresh
  monitorRefresh(user) {

    console.log("monitorRefresh");
    this.messaging.onTokenRefresh(() => {
      console.log('onTokenRefresh()');
      this.messaging.getToken()
        .then(refreshedToken => {
          console.log('Token refreshed.');
          this.updateToken(123, refreshedToken);
        })
        .catch(err => console.log(err, 'Unable to retrieve new token'));
    });


    // this.messaging.setBackgroundMessageHandler((payload) => {
    //   console.log('[firebase-messaging-sw.js] Received background message ', payload);
    //   // Customize notification here
    //   const notificationTitle = payload.data.title;
    //   const notificationOptions = {
    //     body: payload.data.body,
    //     icon: '/assets/images/homestay-logo.png'
    //   };
    //   return this.messaging.showNotification(notificationTitle, notificationOptions);
    // });


  }


}
