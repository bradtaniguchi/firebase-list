import { writeFile } from 'fs';
import { argv } from 'yargs';
import { existsSync, mkdirSync } from 'fs';
/**
 * @author Bradley Taniguchi
 * @description
 * This file takes environment variables, for the firebase config.
 */
require('dotenv').config();

const dir = './src/environments';
const environment = argv.environment;
const isProd = environment === 'prod';
const hmr = !!argv.hmr;
const targetPath = `./src/environments/environment.ts`;
console.log('test hmr: ', hmr);
const envConfigFile = `
export const environment = {
  production: ${isProd},
  hmr: ${hmr},
  firebase: {
    apiKey: "${process.env.FIREBASE_API_KEY}",
    projectId: "${process.env.FIREBASE_PROJECT_ID}",
    authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}"
  },
  serviceAccount: {
    email: "${process.env.GOOGLE_LOGIN}",
    password: "${process.env.GOOGLE_PASSWORD}"
  }
};
`;
if (!existsSync(dir)) {
  console.log('made environments directory');
  mkdirSync(dir);
}

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log('err: ', err);
  }

  console.log(`Output generated at ${targetPath}`);
});
