import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote2',

  exposes: {
    './Module': './src/store.ts',
  },
};

export default config;
