//Question
// Complete the solution so that it reverses the string 
// passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'


// Solution
function solution(str){
  
    let arr = [];
    
    for (i = str.length - 1; i >= 0; i--) {
      arr.push(str[i]);
    }
      return arr.join("").toString();
    }


solution('world');