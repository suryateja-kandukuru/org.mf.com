import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'shell-with-remotes',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  exposes: {
 //   './shared-state': '../../../../libs/src/index.ts',
  },
  remotes: ['remote1', 'remote2'],
  shared: (name, config) => {
    return false;
  },
  additionalShared: [
    {
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
    },
    {
      libraryName: 'jotai',
      sharedConfig: {
        eager: false,
        singleton: true,
        requiredVersion: false,
      },
    },
  ],
};

export default config;
