import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.iqranow.app',
  appName: 'iqra-now',
  webDir: 'public', // still needed but unused with external URL
  server: {
    url: 'https://iqra-now.app',
    cleartext: false
  }
};

export default config;
