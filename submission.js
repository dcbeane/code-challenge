const findSum = function(array) {
  // your code here - don't forget to return a number!

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!

    let frequency = {};

    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (frequency[item] === undefined) {
        frequency[item] = 1;
      } else {
        frequency[item]++;
      }
    }

    let mostFreq = null;
    let leastFreq = null;
    let highestCount = -Infinity;
    let lowestCount = Infinity;

    for (let item in frequency) {
      if (frequency[item] > highestCount) {
        highestCount = frequency[item];
        mostFreq = item;
      }
      if (frequency[item] < lowestCount) {
        lowestCount = frequency[item];
        leastFreq = item;
      }
    }
    return { most: mostFreq, least: leastFreq };
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!

    str = str.toLowerCase();

    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!

    let largestProd = array[0] * array[1];

    for (let i = 0; i < array.length -1; i++) {
      let currentProd = array[i] * array[i + 1];
      
      if (currentProd > largestProd) {
        largestProd = currentProd;
      }
    }
    return largestProd;
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!

    let opnParIndex = str.indexOf('(');
    let clsParIndex = str.indexOf(')');

    let beforePar = str.substring(0, opnParIndex);
    let afterPar = str.substring(clsParIndex + 1);

    let result = beforePar + afterPar;

    return result;
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!

    const points = {
      1: ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't'],
      2: ['d', 'g'],
      3: ['b', 'c', 'm', 'p'],
      4: ['f', 'h', 'v', 'w', 'y'],
      5: ['k'],
      8: ['j', 'x'],
      10: ['q', 'z']
    };

    let score = 0;

    for (let i = 0; i < str.length; i++) {
      const element = str[i].toLowerCase();
      
      for (let key in points) { 
        if (points[key].includes(element)) { 
          score += parseInt(key); 
        }
      }
    }

    return score;
};
