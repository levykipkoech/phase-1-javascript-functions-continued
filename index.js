// code your solution here
function saturdayFun(activity='roller-skate'){
//    return ("This Saturday, I want to roller-skate!");
  return (`This Saturday, I want to ${activity}!`);
}
saturdayFun ("bathe my dog");

function mondayWork (task='go to the office') {
    // return ("This Monday, I will go to yhe office")
    return (`This Monday, I will ${task}.`)
}
 mondayWork("work from home")

  function wrapAdjective(style='*'){
     return function (condition='special'){
         return `You are ${style}${condition}${style}!`
     }
    
  }
  
