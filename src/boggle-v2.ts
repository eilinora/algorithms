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
const boggle: Board = [["G", "N", "Z"], ["U", "E", "K"], ["F", "S", "E"]];

const createTrie = (word: string, trie: TrieNode, i: number = 0, level: number = 0): TrieNode => {
    // for (let i = startPos; i < word.length; i++) {
        
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
    // }
}

const buildTrie = (dic: Dictionary): TrieNode => {
    return dic.reduce((acc, cur) => {
        return {
            ...acc,
            ...createTrie(cur, acc),
        }
    }, {} as TrieNode);
}

console.log(JSON.stringify(buildTrie(dictionary), null, 2));