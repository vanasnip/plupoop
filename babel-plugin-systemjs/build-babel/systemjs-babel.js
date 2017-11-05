import babel from 'babel';
export { babel };

import dynamicImportSyntax from 'babel-plugin-syntax-dynamic-import';
import modulesRegisterPlugin from 'babel-plugin-transform-es2015-modules-systemjs';
export let modulesRegister = {
  plugins: [dynamicImportSyntax, modulesRegisterPlugin]
};

import externalHelpersPlugin from 'babel-plugin-external-helpers';
export let externalHelpers = {
  plugins: [externalHelpersPlugin]
};

import runtimeTransformPlugin from 'babel-plugin-transform-runtime';
export let runtimeTransform = {
  plugins: [[runtimeTransformPlugin, { polyfill: false }]]
};

import p1 from 'babel-preset-stage-1';
import p2 from 'babel-preset-stage-2';
import p3 from 'babel-preset-stage-3';
import pReact from 'babel-preset-react';

let pluginsStage1 = p1.plugins;
let pluginsStage2 = p2.plugins;
let pluginsStage3 = p3.plugins;
let pluginsReact  = pReact.plugins;

export { pluginsStage1, pluginsStage2, pluginsStage3, pluginsReact }

// ES2015 plugins to keep in sync with https://github.com/babel/babel/blob/master/packages/babel-preset-es2015/index.js
import templateLiterals from 'babel-plugin-transform-es2015-template-literals';
import literals from 'babel-plugin-transform-es2015-literals';
import functionName from 'babel-plugin-transform-es2015-function-name';
import arrowFunctions from 'babel-plugin-transform-es2015-arrow-functions';
import blockScopedFunctions from 'babel-plugin-transform-es2015-block-scoped-functions';
import classes from 'babel-plugin-transform-es2015-classes';
import objectSuper from 'babel-plugin-transform-es2015-object-super';
import shorthandProperties from 'babel-plugin-transform-es2015-shorthand-properties';
import computedProperties from 'babel-plugin-transform-es2015-computed-properties';
import forOf from 'babel-plugin-transform-es2015-for-of';
import stickyRegex from 'babel-plugin-transform-es2015-sticky-regex';
import unicodeRegex from 'babel-plugin-transform-es2015-unicode-regex';
import constants from 'babel-plugin-check-es2015-constants';
import spread from 'babel-plugin-transform-es2015-spread';
import parameters from 'babel-plugin-transform-es2015-parameters';
import destructuring from 'babel-plugin-transform-es2015-destructuring';
import blockScoping from 'babel-plugin-transform-es2015-block-scoping';
// removed as this pulls in too much of core-js
// import typeofSymbol from 'babel-plugin-transform-es2015-typeof-symbol';
import regenerator from 'babel-plugin-transform-regenerator';

let es2015Plugins = [
  templateLiterals,
  literals,
  functionName,
  arrowFunctions,
  blockScopedFunctions,
  classes,
  objectSuper,
  shorthandProperties,
  computedProperties,
  forOf,
  stickyRegex,
  unicodeRegex,
  constants,
  spread,
  parameters,
  destructuring,
  blockScoping,
  // typeofSymbol
];

let regeneratorPlugin = [regenerator, { async: false, asyncGenerators: false }];

export let presetES2015 = {
  plugins: [dynamicImportSyntax, ...es2015Plugins, regeneratorPlugin]
};

export let presetES2015Register = {
  plugins: [dynamicImportSyntax, ...es2015Plugins, modulesRegisterPlugin, regeneratorPlugin]
};
