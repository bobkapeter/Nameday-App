import Vue from 'vue';
import { random } from 'lodash';
import babelPolyfill from 'babel-polyfill';

import TheApp from './TheApp.vue';

/**
 * Vue Instance - APP
 */
new Vue({
	el: '#app',
	render: (h) => h(TheApp),
});

const primaryColors = [
	'#f32121' /* Red */,
	'#4321f3' /* Blue */,
	'#125dd0' /* Blue */,
	'#03a9f4' /* Blue */,
	'#108c26' /* Green */,
	'#ff4308' /* Orange */,
	'#d2a009' /* Yellow */,
	'#cca531' /* Yellow */,
];
const randomColorIndex = random(0, primaryColors.length - 1);
const randomColor = primaryColors[randomColorIndex];

/**
 * Set primary color & Show body element
 */
document.documentElement.style.setProperty('--primary-color', randomColor);
document.body.dataset.hidden = 'false';
