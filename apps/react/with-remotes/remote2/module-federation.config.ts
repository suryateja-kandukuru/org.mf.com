import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'remote2',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (name, config) => {
    return false;
  },
  additionalShared: [{
    libraryName: 'react',
    sharedConfig: {
      eager: false,
      singleton: true,
      requiredVersion: '18.2.0',
    },
  },
  {
    libraryName: 'react-dom',
    sharedConfig: {
      eager: false,
      singleton: true,
      requiredVersion: '18.2.0',
    },
  },
  {
    libraryName: 'react/jsx-dev-runtime',
    sharedConfig: {
      eager: false,
      singleton: true,
      requiredVersion: '18.2.0',
    },
  },
    {
      libraryName: '@mfe-monorepo/shared-state',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: false,
      },
    }
  ],
};

export default config;
