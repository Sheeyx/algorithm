// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// return masked string
// Solution
function maskify(cc) {
    let anyValue = cc
    if(anyValue.length>4){
      let result = []
      let x= anyValue.slice(anyValue.length-4,anyValue.length)
      for(let i=0; i<anyValue.length-4 ; i++){
        result.push('#')
      }
      result.push(x)
      result = result.join('')
      return result
    } else {
      return anyValue
    }
    
  }

  maskify('4556364607935616');
//  Answer should be like this ('############5616');