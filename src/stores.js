import { writable } from 'svelte/store';

export const playerPos = writable({
    moveCounts: 1,
    row: 0,
    col: 0,
    playerStart: {
        row: 0,
        col: 0
    }
});