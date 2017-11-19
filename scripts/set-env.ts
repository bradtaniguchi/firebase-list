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
const targetPath = `./src/environments/environment.${environment}.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  firebase: {
    apiKey: "${process.env.FIREBASE_API_KEY}",
    projectId: "${process.env.FIREBASE_PROJECT_ID}"
  }
};
`;

if (!existsSync(dir)){
  console.log('made environments directory');
  mkdirSync(dir);
}

writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    console.log('err: ', err);
  }

  console.log(`Output generated at ${targetPath}`);
});