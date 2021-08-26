// ```// generateCoinChange(input)
// // input is an integer representing an amount of money
// // output is an object representing the most optimal
// // (i.e. fewest coins) way to represent that amount
// // with standard U.S. coins
// // if the input is 74 cents, the output would be:
// // {quarters: 2, dimes: 2, nickels: 0, pennies: 4}
// // if the input is 109 cents, the output would be:
// // {quarters: 4, dimes: 0, nickels: 1, pennies: 4


// 

function generateCoinChange(input) {
    var quarter = 25;
    var dime = 10;
    var nickel = 5;
    var penny = 1;
    var remainder = input; //74

    var numQuarters = 0;
    var numDime = 0;
    var numNickel = 0;
    var numPenny = 0;

    numQuarters = Math.floor(remainder/quarter);
    console.log('Quarters: ' + numQuarters);
    remainder = remainder%quarter;// 24
    console.log('remainder: ' + remainder);

    numDime = Math.floor(remainder/dime);
    console.log('Dimes: ' + numDime);
    remainder = remainder%dime;// 4
    console.log('remainder: ' + remainder);

    numNickel = Math.floor(remainder/nickel);
    console.log('Nickels: ' + numNickel);
    remainder = remainder%nickel;// 4
    console.log('remainder: ' + remainder);

    numPenny = Math.floor(remainder/penny);
    console.log('Pennys: ' + numPenny);
    remainder = remainder%penny;// 24
    console.log('remainder: ' + remainder);

    var output = {'quarter': numQuarters, 'dime': numDime, 'nickel': numNickel, 'penny': numPenny};
    return output;
}
console.log(generateCoinChange(2))

function generateCoinChangeWithGivenValues(input, values) {
    var remainder = input; //74
    var output = {};
    for (var i = 0; i < values.length; ++i){
        var label = values[i][0];
        output[label] = Math.floor(remainder/values[i][1]);
        remainder = remainder%values[i][1];
    }
    return output;
}

generateCoinChangeWithGivenValues(52, [['halfquarter', 12], ['greater nickel', 8], ['lesser dime', 3], ['just-a-penny', 1]]);
