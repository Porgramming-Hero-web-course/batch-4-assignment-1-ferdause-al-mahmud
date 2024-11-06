{

    
    function countWordOccurrences(sentence:string,word:string):number{
        const lowerSentence = sentence.toLowerCase();
        const lowerWord = word.toLowerCase();
        const wordsArray = lowerSentence.split(/\b/); 

        const times= wordsArray.filter(w => w === lowerWord).length;

        return times;
    }


//    const wordInSen= countWordOccurrences("TypeScript is great. I love TypeScript! But typeScript is hard", "typescript");
//     console.log(wordInSen)



}