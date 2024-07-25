import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote1',
  remotes: ['remote2'],
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
