import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier'

export default [
    {
        ignores: ['dist'],
    },    
    {
    files: ['**/*.{js,jsx}'], // Target JS and JSX files
    extends: [
              'eslint:recommended', 
               'plugin:react/recommended', 
                'prettier' 
            ], // Extend recommended configurations        
    plugins: ['react', 'prettier'], // Use necessary plugins
    rules: {
      'react/react-in-jsx-scope': 'off', // No longer needed for React 17+        
      'prettier/prettier': 'error', // Enable prettier rules
       "semi": ["error", "always"], // Enforces semicolon usage
       "quotes": ["error", "single"], // Enforces single quotes
        "jsx-quotes": ["error", "prefer-double"] // Enforces double quotes in JSX
    },
       "settings": {
        "react": {
          "version": "detect" 
        }
      },parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module',  },env: {
    browser: true,
    es2021: true,
  },
  },
  {
    files: ['**/*.{ts,tsx}'], // Target TS and TSX files
    extends: [      
      'plugin:@typescript-eslint/recommended',      
      'plugin:react/recommended',   
     'prettier'
    ],
    parser: '@typescript-eslint/parser', // Use TypeScript parser
    parserOptions: {
        project: './tsconfig.json', // Point to your tsconfig.json
        tsconfigRootDir: __dirname        
    },
    plugins: ['react', '@typescript-eslint','react-hooks', 'react-refresh', 'prettier'], // Include necessary plugins
    rules: {
      'react/react-in-jsx-scope': 'off',  
       'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',// enable prettier to be able to see prettier errors
          "semi": ["error", "always"],
           "quotes": ["error", "single"],
        "jsx-quotes": ["error", "prefer-double"],       
            "@typescript-eslint/no-unused-vars": "warn" // or "error"

    },    
        "settings": {
        "react": {
          "version": "detect" 
        }
      }
  },
];