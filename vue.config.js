module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pluginOptions: {
    s3Deploy: {
      awsProfile: "Specifies the credentials profile to use. For env vars, omit or set to 'default'. (default: default)",
      endpoint: "Override the default AWS endpoint with another e.g. DigitalOcean.",
      region: "AWS region for the specified bucket (default: us-east-1)",
      bucket: "The S3 bucket name (required)",
      createBucket: "Create the bucket if it doesn't exist (default: false)",
      staticHosting: "Enable S3 static site hosting (default: false)",
      staticIndexPage: "Sets the default index file (default: index.html)",
      staticErrorPage: "Sets the default error file (default: error.html)",
      assetPath: "The path to the built assets (default: dist)",
      assetMatch: "Regex matcher for asset to deploy (default: **)",
      deployPath: "Path to deploy the app in the bucket (default: /)",
      acl: "Access control list permissions to apply in S3 (default: public-read)",
      pwa: "Sets max-age=0 for the PWA-related files specified (default: false)",
      pwaFiles: "Comma-separated list of files to treat as PWA files",
      enableCloudfront: "Enables support for Cloudfront distribution invalidation (default: false)",
      cloudfrontId: "The ID of the distribution to invalidate",
      cloudfrontMatchers: "A comma-separated list of paths to invalidate (default: /*)",
      uploadConcurrency: "Number of concurrent uploads (default: 5)",
      cacheControl: "Sets cache-control metadata for all uploads, overridden for individual files by pwa settings",
      gzip: "Enables GZIP compression",
      gzipFilePattern: "Pattern for matching files to be gzipped. (By default: '**/*.{js,css,json,ico,map,xml,txt,svg,eot,ttf,woff,woff2}')"
    }
  }
}
