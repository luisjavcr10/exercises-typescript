function strStr(haystack: string, needle: string): number {
    if(!haystack.includes(needle)) 
        return -1;
    else{
        const haystack2 = haystack.replace(needle,'+');
        const index = haystack2.indexOf('+');
        return index;
    }
};

console.log(strStr("sadbutsad", "sad"));