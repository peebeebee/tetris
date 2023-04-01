import assert from 'assert';

import {Tetris} from './Tetris.js';

(function createNewTetris() {
  const tetris = new Tetris();
  assert(tetris.score === 0, 'Score should be 0');
})();