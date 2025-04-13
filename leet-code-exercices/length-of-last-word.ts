function lengthOfLastWord(s: string): number {
    const index = (s.trim()).lastIndexOf(' ');
    return((s.trim()).substring(index+1)).length;
};

console.log(lengthOfLastWord("Hello World")); // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log(lengthOfLastWord("luffy is still joyboy")); // 6
console.log(lengthOfLastWord("a")); // 1