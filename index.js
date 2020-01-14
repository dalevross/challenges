const nPalindromes = (n) => {
    const start = Math.pow(10,n-1);
    const count = 9 * Math.pow(10,n-1);
    const allInts = [...Array(count).keys()].map(i => i + start);
    const palindromicInts = allInts.filter(isPalindrome);
    return {sum: palindromicInts.reduce((a,b) => {
        return a + b;
    },0), allem: palindromicInts};
    
}
const isPalindrome = (n) =>
{
   return (n + "").split("").reverse().join("") == n;

}

let answer = nPalindromes(5);
console.log(answer.sum  + " // => " + answer.allem.join(" + "));