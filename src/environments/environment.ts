export const environment = {
  production: false,
  API_BASE_URL: 'http://identitymanagementapi-1966185121.ap-southeast-2.elb.amazonaws.com',
  authConfig: {
    // authority: 'https://demo.identityserver.io',
    authority: 'http://identitymanagementapi-1966185121.ap-southeast-2.elb.amazonaws.com',
    client_id: 'angularclient',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: "id_token token",
    scope: "openid profile",
    filterProtocolClaims: true,
    loadUserInfo: true
  }
};
