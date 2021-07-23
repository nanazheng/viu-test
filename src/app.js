import { createLogger } from 'redux-logger';

const _config =
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        onAction: createLogger({
          collapsed: true,
        }),
      };

export const dva = {
  config: {
    ..._config,
    onError(err) {
      err.preventDefault();
      if (process.env.NODE_ENV !== 'production') {
        console.error(err.message);
      }
    },
  },
};
