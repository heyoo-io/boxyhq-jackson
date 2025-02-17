import { incrementCounter } from '@boxyhq/metrics';

const METER = 'jackson';

const counters = {
  createConnection: () =>
    incrementCounter({
      meter: METER,
      name: 'jackson.connection.create',
      counterOptions: { description: 'Number of IdP connection create requests' },
    }),
  getConnections: () =>
    incrementCounter({
      meter: METER,
      name: 'jackson.connection.get',
      counterOptions: { description: 'Number of IdP connections get requests' },
    }),
  deleteConnections: () =>
    incrementCounter({
      meter: METER,
      name: 'jackson.connection.delete',
      counterOptions: { description: 'Number of IdP connections delete requests' },
    }),
  oauthAuthorize: () =>
    incrementCounter({
      meter: METER,
      name: 'jackson.oauth.authorize',
      counterOptions: { description: 'Number of oauth authorize requests' },
    }),
  oauthToken: () =>
    incrementCounter({
      meter: METER,
      name: 'jackson.oauth.token',
      counterOptions: { description: 'Number of oauth token requests' },
    }),

  oauthUserInfo: () =>
    incrementCounter({
      meter: METER,
      name: 'jackson.oauth.userinfo',
      counterOptions: { description: 'Number of oauth user info requests' },
    }),
};

const increment = (action: keyof typeof counters) => {
  const counterIncrement = counters[action];
  if (typeof counterIncrement === 'function') {
    counterIncrement();
  }
};

export { increment };
