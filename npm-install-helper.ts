/**
 * formatNpmInstall
 
 * @param str string 
 * - a string of packages, formatted as they would be in a package.json file,
 * example below `convert`
 * 
 * @param dev boolean - if true, will add --save-dev to the npm install command
 * @returns string - a formatted npm install command
 */
function formatNpmInstall(str: string, dev: boolean): string {
  const cleanStr = str.replace(/"|,|\^/g, '');
  const packages = cleanStr
    .split('\n')
    .map(pkg => pkg.split(':')[0].trim())
    .filter(pkg => pkg);

  const npmCommand = `npm i ${dev ? '--save-dev' : ''} ${packages.join(' ')}`.trim();

  return npmCommand;
}

const convert = `
"stylelint": "^15.10.3",
"stylelint-config-idiomatic-order": "^9.0.0",
"stylelint-config-recommended": "^13.0.0",
"stylelint-config-standard": "^34.0.0",
"stylelint-order": "^6.0.3",
"@typescript-eslint/eslint-plugin": "^6.6.0",
"@typescript-eslint/parser": "^6.6.0",
"eslint": "^8.48.0",
"eslint-config-airbnb": "^19.0.4",
"eslint-config-airbnb-typescript": "^17.1.0",
"eslint-config-next": "^13.4.19",
"eslint-plugin-import": "^2.28.1",
"eslint-plugin-jsx-a11y": "^6.7.1",
"eslint-plugin-react": "^7.33.2",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-simple-import-sort": "^10.0.0",
"eslint-plugin-unicorn": "^48.0.1",
"postcss": "^8.4.29",
"postcss-flexbugs-fixes": "^5.0.2",
"postcss-preset-env": "^9.1.3"
`;

/*
npm i --save-dev stylelint stylelint-config-idiomatic-order stylelint-config-recommended stylelint-config-standard stylelint-order @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-airbnb-typescript eslint-config-next eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort eslint-plugin-unicorn postcss postcss-flexbugs-fixes postcss-preset-env
*/
console.log(formatNpmInstall(convert, true));
