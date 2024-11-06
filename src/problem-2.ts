{

    function removeDuplicates(arr: number[]): number[] {

        const numbers=(new Set(arr));
        return Array.from(numbers)
    }
    
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    
    




}