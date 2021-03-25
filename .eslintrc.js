/* Using ESLint and Prettier in a TypeScript Project
 * Robert Cooper
 * updated on April 25, 2020
 * https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project
 */
module.exports = {
  // Specifies the ESLint parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Allows for the parsing of modern ECMAScript features
    ecmaVersion: 2020,
    // Allows for the use of imports
    sourceType: 'module',
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true
    }
  },
  settings: {
    react: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      version: 'detect'
    }
  },
  extends: [
    // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/recommended',
    // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Uses eslint-config-prettier to disable ESLint rules from
    // @typescript-eslint/eslint-plugin that would conflict with prettier
    'prettier/@typescript-eslint',
    // Enables eslint-plugin-prettier and eslint-config-prettier.
    // This will display prettier errors as ESLint errors.
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended'
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
}
