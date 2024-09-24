export default () => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  graphql: {
    config: {
      endpoint: '/graphql',
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 20,
      amountLimit: 1000,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "apollo-sandbox": {
    enabled: true,
  },
});
