console.log('boo');


// const messaging = firebase.messaging();
//
//
//
// // Get Instance ID token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// messaging.getToken().then(function(currentToken) {
//   if (currentToken) {
//     sendTokenToServer(currentToken);
//     updateUIForPushEnabled(currentToken);
//   } else {
//     // Show permission request.
//     console.log('No Instance ID token available. Request permission to generate one.');
//     // Show permission UI.
//     updateUIForPushPermissionRequired();
//     setTokenSentToServer(false);
//   }
// }).catch(function(err) {
//   console.log('An error occurred while retrieving token. ', err);
//   showToken('Error retrieving Instance ID token. ', err);
//   setTokenSentToServer(false);
// });
//
//
//
// // Callback fired if Instance ID token is updated.
// messaging.onTokenRefresh(function() {
//   messaging.getToken().then(function(refreshedToken) {
//     console.log('Token refreshed.');
//     // Indicate that the new Instance ID token has not yet been sent to the
//     // app server.
//     setTokenSentToServer(false);
//     // Send Instance ID token to app server.
//     sendTokenToServer(refreshedToken);
//     // ...
//   }).catch(function(err) {
//     console.log('Unable to retrieve refreshed token ', err);
//     showToken('Unable to retrieve refreshed token ', err);
//   });
// });


// // Retrieve Firebase Messaging object.
// const messaging = firebase.messaging();
//
// // Add the public key generated from the console here.
// messaging.usePublicVapidKey("BF4CbLXiVJe70RtKjXeDQYXwlEojG_VYbT3R4-Ew_C9auPnt_KIVtfy2waAIy6_j6krMwrB5ct3JNrE_KbOv9hY");
//
// messaging.requestPermission().then(function () {
//   console.log('Notification permission granted.');
//   // TODO(developer): Retrieve an Instance ID token for use with FCM.
//   // ...
// }).catch(function (err) {
//   console.log('Unable to get permission to notify.', err);
// });
//
// // Get Instance ID token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// messaging.getToken().then(function (currentToken) {
//   if (currentToken) {
//     sendTokenToServer(currentToken);
//     updateUIForPushEnabled(currentToken);
//   } else {
//     // Show permission request.
//     console.log('No Instance ID token available. Request permission to generate one.');
//     // Show permission UI.
//     updateUIForPushPermissionRequired();
//     setTokenSentToServer(false);
//   }
// }).catch(function (err) {
//   console.log('An error occurred while retrieving token. ', err);
//   showToken('Error retrieving Instance ID token. ', err);
//   setTokenSentToServer(false);
// });
//
//
// // Callback fired if Instance ID token is updated.
// messaging.onTokenRefresh(function () {
//   messaging.getToken().then(function (refreshedToken) {
//     console.log('Token refreshed.');
//     // Indicate that the new Instance ID token has not yet been sent to the
//     // app server.
//     setTokenSentToServer(false);
//     // Send Instance ID token to app server.
//     sendTokenToServer(refreshedToken);
//     // ...
//   }).catch(function (err) {
//     console.log('Unable to retrieve refreshed token ', err);
//     showToken('Unable to retrieve refreshed token ', err);
//   });
// });


importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');


firebase.initializeApp({
  'messagingSenderId': '668809694067'
});

const messaging = firebase.messaging();


messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = payload.data.title;
  var notificationOptions = {
    body: payload.data.body,
    icon: '/assets/images/homestay-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
