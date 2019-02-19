export const environment = {
  production: true,
  API_BASE_URL: 'http://essence-communication-api-791146997.ap-southeast-2.elb.amazonaws.com/api',
  authConfig: {
    authority: 'http://identitymanagementapi-1966185121.ap-southeast-2.elb.amazonaws.com',
    client_id: 'angularclient-aws',
    redirect_uri: 'http://app.homestay.care/auth-callback',
    post_logout_redirect_uri: 'http://app.homestay.care/',
    response_type: "id_token token",
    scope: "openid profile",
    filterProtocolClaims: true,
    loadUserInfo: true
  }
};
