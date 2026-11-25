// Fridge Roast: one line roasting a smart fridge. Node 22, standard library only.
// Writes it to /output/entry.txt (MAKEFUN_OUTPUT_DIR stands in for /output locally).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const roast =
  'My smart fridge installed an update overnight and greeted me with "Welcome! Let\'s set up your fridge." Buddy, the mustard has been here longer than your memory.';

// The gate takes 1 to 200 characters: fail loudly rather than enter an invalid line.
if ([...roast].length > 200 || roast.trim() === '') throw new Error(`roast is ${[...roast].length} characters`);

writeFileSync(join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'), roast);
