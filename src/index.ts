import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

// @ts-ignore
import { Coco } from 'chroma-console';

function test(): void {
    const array = [1, 10, -4, 2, 7, 8, -2, 98, 10, 8, 2];

    Coco.start();

    let stringHolder = 'Old array values - ';
    for (let i = 0; i < array.length; i++) {
        stringHolder = stringHolder + ', ' + array[i];
    }

    Coco.log('Old array size - ' + array.length);
    Coco.log(stringHolder);

    const newArray = new Set();
    for (let i = 0; i < array.length; i++) {
        newArray.add(array[i]);
    }

    stringHolder = '';
    for (let i = 0; i < newArray.size; i++) {
        stringHolder = stringHolder + newArray[i];
    }

    Coco.log('New array size - ' + newArray.size);
    Coco.log(stringHolder);
}

consoleStart();
test();

consoleEnd();

export {};
