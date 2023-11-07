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

    const newCountArray = [];
    const dupeArray = [];

    for (let i = 0; i < array.length; i++) {
        if (newCountArray.includes(array[i])) {
            dupeArray.push(array[i]);
        } else {
            newCountArray.push(array[i]);
        }
    }

    stringHolder = 'Duped array values - ';
    for (let i = 0; i < dupeArray.length; i++) {
        stringHolder = stringHolder + dupeArray[i] + ', ';
    }

    Coco.log('Duped array size - ' + dupeArray.length);
    Coco.log(stringHolder);

    const finalArray = array.filter((x) => !dupeArray.includes(x));

    stringHolder = 'Final array values - ';
    for (let i = 0; i < finalArray.length; i++) {
        stringHolder = stringHolder + finalArray[i] + ', ';
    }

    Coco.log('Final array size - ' + finalArray.length);
    Coco.log(stringHolder);

    Coco.end();
}

consoleStart();
test();

consoleEnd();

export {};
