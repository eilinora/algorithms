type Dictionary = string[];
type Board = string[][];
type TrieNode = any; // #TODO type the tree...

const dictionary: Dictionary = [
  "GEEK",
  "FOR",
  "FUN",
  "CAT",
  "CATURPILER",
  "CAR",
  "QUIZ",
  "GO"
];
const boggle: Board = [["G", "N", "Z"], ["U", "E", "K"], ["F", "S", "E"]];

const t = (word: string, parent: TrieNode, pos: number) => {
  const l = word[pos];
  // console.log("l", l);

  const isEnd =
    pos === word.length - 1
      ? {
          end: true
        }
      : {};

  parent[l] = {
    ...(parent[l] as TrieNode),
    ...isEnd
  };

  if (pos + 1 < word.length) {
    return t(word, parent[l], pos + 1);
  }
};

const buildTrie = (dict: Dictionary): TrieNode => {
  const d = dict.reduce((acc, cur) => {
    return {
      ...acc,
      ...t(cur, acc, 0)
    };
  }, {});

  return d;
};

const checkLetter = (
  board: Board,
  x: number,
  y: number,
  trie: TrieNode,
  tried: Array<string>,
  words: string[],
  parent: string,
  depth: number
) => {
  const row = board.length;
  const col = board[0].length;

  const vertices = [
    [0, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1]
  ];
  for (let i = 0; i < vertices.length; i++) {
    const pos = vertices[i];
    const r = x + pos[0];
    const c = y + pos[1];

    // console.log("new depth", depth, pos);

    if (r >= 0 && r < row && c >= 0 && c < col) {
      const l = board[r][c];

      // check to see if we have already used this position
      if (!tried.includes(`${r},${c}`)) {
        // letter found mark it as used...
        tried.push(`${r},${c}`);

        // console.log("key to try", `${r},${c}`, l, trie[l]);
        if (trie[l]) {
          // console.log("found", l);
          if (trie[l].end) {
            // console.log("found word!!", `${parent}${l}`);
            return words.push(`${parent}${l}`);
          }

          // traverse trie
          return checkLetter(
            board,
            r,
            c,
            trie[l],
            [`${r},${c}`],
            words,
            `${parent}${l}`,
            depth + 1
          );
        }
      }

      // console.log("to skip... cause tried", `${r},${c}`, pos, board[r][c]);
    }
  }

  return words;
};

const buildMatrix = (board: Board, dictionary: Dictionary): string[] => {
  const row = board.length;
  const col = board[0].length;

  const trie = buildTrie(dictionary);

  const words = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      // lets check if there is even word that starts with this letter
      if (trie[board[i][j]]) {
        checkLetter(board, i, j, trie, [], words, "", 0);
      }
    }
  }

  return words;
};

console.log(buildMatrix(boggle, dictionary));
