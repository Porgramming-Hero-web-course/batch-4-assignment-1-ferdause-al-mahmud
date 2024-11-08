{


    function countWordOccurrences(sentence: string, word: string): number {
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();
        const wordsArray = lowerSentence.split(/\b/);
        let times = 0;
        for (const element of wordsArray) {
            if (element.includes(lowerWord)) {
                times++;
            }
        }


        return times;
    }


    //    const wordInSen= countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
    //     console.log(wordInSen)



}