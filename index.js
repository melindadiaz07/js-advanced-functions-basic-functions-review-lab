// Your code here
function saturdayFun(params="roller-skate") {
  return `This Saturday, I want to ${params}!`
}

function mondayWork(args="go to the office") {
  return `This Monday, I will ${args}.`
}

 function wrapAdjective(flair="*") {
  return function(arg="special") {
    return `You are ${flair}${arg}${flair}!`
  }
}

let Calculator = {
  add: function(a, b) { return a + b },
  subtract: function(a, b) { return a - b },
  multiply: function(a, b) { return a * b },
  divide: function(a, b) { return a / b }
}

function actionApplyer(num, array){
     array.forEach(fn => num = fn(num)  )
     return num
}
