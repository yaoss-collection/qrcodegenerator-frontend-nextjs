declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
      NEXT_PUBLIC_MATOMO_URL: string;
      NEXT_PUBLIC_MATOMO_SITE_ID: string;
      NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string;
    }
  }
}

export {};
