export const environment = {
  production: true,
  API_BASE_URL: 'http://essence-communication-api-791146997.ap-southeast-2.elb.amazonaws.com/api',
  authConfig: {
    authority: 'https://demo.identityserver.io',
    // authority: 'http://identitymanagementapi-1966185121.ap-southeast-2.elb.amazonaws.com',
    client_id: 'implicit',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: "id_token token",
    scope: "openid profile",
    filterProtocolClaims: true,
    loadUserInfo: true
  },
  firebase: {
    apiKey: "AIzaSyDlEuuQA3VAO3aNMNv1dq0YxVEWQC7Ye4k",
    authDomain: "test-project-406e1.firebaseapp.com",
    databaseURL: "https://test-project-406e1.firebaseio.com",
    projectId: "test-project-406e1",
    storageBucket: "test-project-406e1.appspot.com",
    messagingSenderId: "668809694067"
  }
};
