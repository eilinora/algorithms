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
  "GEAR",
  "GO"
];
const boggle: Board = [["G", "I", "Z"], ["U", "E", "K"], ["Q", "S", "E"]];

const createTrie = (word: string, trie: TrieNode, i: number = 0): TrieNode => {
    if (i === word.length) {
        return trie;
    }
    const l = word[i];
    const isLastLetter = i+1 === word.length;

    if (trie[l]) {
        return {
            ...trie,
            [l]: {
                ...trie[l],
                ...createTrie(word, trie[l], i+1),
                ...(isLastLetter ? { isLastLetter } : {})
            }
        };
    }

    return {
        ...trie,
        [l]: {
            ...createTrie(word, {}, i+1),
            ...(isLastLetter ? { isLastLetter } : {})
        }
    }
}

const buildTrie = (dic: Dictionary): TrieNode => {
    return dic.reduce((acc, cur) => {
        return {
            ...acc,
            ...createTrie(cur, acc),
        }
    }, {} as TrieNode);
}

const vertices: number[][] = [
    [0, 0],
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
];

const findWordsFromLetter = (board: Board, trie: TrieNode, x: number, y: number, visited: string[] = [], word: string = '', words: string[]): string[] => {
    // const rows = board.length-1;
    // const cols = board[0].length-1;

    for (let i = 0; i < vertices.length; i++) {
        const pos = vertices[i];
        const nX = x + pos[0];
        const nY = y + pos[1];
        
        if (visited.includes(`${nX}${nY}`)) {
            console.log(nX, nY, 'visited', visited.join(','));
            continue;
        }

        if (!board[nX]) {
            console.log(nX, nY, 'skip at an edge');
            continue;
        }

        const l = board[nX][nY];
        // console.log('board letter', nX, nY, l);

        if (l == undefined) {
            continue;
        }

        visited.push(`${nX}${nY}`);

        if (trie[l]) {
            // console.log('found ', l);
            // we want to move to next level
            word += l;

            // console.log('go a level deep', word, l, trie[l]);
            if (trie[l].isLastLetter) {
                words.push(word);

                return words;
            }

            return findWordsFromLetter(board, trie[l], nX, nY, [`${nX}${nY}`], word, words);
        }
    }

    return words;
}

const findWords = (board: Board, trie: TrieNode): string[] => {
    const words = [];

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board.length; j++) {
            const letter = board[i][j];

            // console.log('-- letter', letter, i, j);
            if (trie[letter]) {
                // console.log('----');
                // console.log('letter start found', letter, trie[letter]);
                findWordsFromLetter(board, trie[letter], i, j, [], letter, words);
            }
        }
    }
    return words;
}

//console.log(JSON.stringify(buildTrie(dictionary), null, 2));
console.log(findWords(boggle, buildTrie(dictionary)));
