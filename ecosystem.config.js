module.exports = {
  apps: [
    {
      name: 'nuxt-jenkins-pm2',
      exec_mode: 'cluster',
      instances: 'max',
      script: './server.js',
      env_production: {
        NODE_ENV: "production"
      },
      env_development: {
        NODE_ENV: "development"
      }
    }
  ]
}