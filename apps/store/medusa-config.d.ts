declare const REDIS_URL: 'redis://localhost:6379';
declare const DATABASE_URL: 'postgres://user:password@localhost:5432/medusa-docker';
declare const STORE_CORS: 'http://localhost:8000';
declare const ADMIN_CORS: 'http://localhost:7000,http://localhost:7001';
export const plugins: (
  | {
      resolve: string;
      options?: undefined;
    }
  | {
      resolve: string;
      options: {
        s3_url: string;
        bucket: string;
        region: string;
        access_key_id: string;
        secret_access_key: string;
        config?: undefined;
        settings?: undefined;
      };
    }
  | {
      resolve: string;
      options: {
        config: {
          host: string;
          apiKey: string;
        };
        settings: {
          products: {
            searchableAttributes: string[];
            displayedAttributes: string[];
          };
        };
        s3_url?: undefined;
        bucket?: undefined;
        region?: undefined;
        access_key_id?: undefined;
        secret_access_key?: undefined;
      };
    }
)[];
export declare namespace projectConfig {
  export const port: number;
  export { REDIS_URL as redis_url };
  export { DATABASE_URL as database_url };
  export const database_type: string;
  export { STORE_CORS as store_cors };
  export { ADMIN_CORS as admin_cors };
}
export {};
