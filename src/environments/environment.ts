export const environment = {
  production: false,
  authConfig: {
    authority: 'https://demo.identityserver.io',
    client_id: 'implicit',
    redirect_uri: 'http://localhost:4200/auth-callback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    response_type: "id_token token",
    scope: "openid profile",
    filterProtocolClaims: true,
    loadUserInfo: true
  }
};
