
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e154238e330e4e6298adf049ad337bb5',
  appName: 'study-focus-time',
  webDir: 'dist',
  server: {
    url: 'https://e154238e-330e-4e62-98ad-f049ad337bb5.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      keystorePath: null,
      keystorePassword: null,
      keystoreAlias: null,
      keystoreAliasPassword: null,
      signingType: null,
    }
  }
};

export default config;
