import { writable } from 'svelte/store';

export const selectedColor = writable('#ff0000'); //default color
export const fillGrid = writable(false);
export const crochet = writable(false);