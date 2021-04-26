import { writable } from 'svelte/store';
export const playing = writable("None");
export const audioContextReady = writable(false);
export const octave = writable(4);