function MissingDigit(str:string):number { 

  const [lhs, rhs] = str.split('=').map(part => part.trim());

  const operador = lhs.match(/[\+\-\*\/]/)?.[0] || "+";
  const [num1, num2] = lhs.split(/[\+\-\*\/]/).map(part => part.trim());

  if(rhs.includes("x")){
    const lhsValue = calculate(parseInt(num1, 10), parseInt(num2, 10), operador);

    for(let i:number = 0; i<=9; i++){
       const rhsValue = parseInt(rhs.replace('x', i.toString()), 10);

       if(lhsValue === rhsValue){
         return i;
       }
    }
  } else if(num1.includes("x")){
      const rhsValue = parseInt(rhs, 10);
        for(let i:number = 0; i<=9; i++) {

          const currentNum1 =
          parseInt(num1.replace("x", i.toString()), 10);
          const lhsValue = calculate(currentNum1, parseInt(num2, 10), operador);
          if(lhsValue === rhsValue) {
            return i;
          }
        }
  } else if(num2.includes("x")){
    const rhsValue = parseInt(rhs, 10);
    for(let i:number = 0; i<=9; i++){
      const currentNum2 = parseInt(num2.replace("x", i.toString()), 10);
      const lhsValue = calculate(parseInt(num1, 10), currentNum2, operador);
      if(lhsValue === rhsValue){

        return i;
      }
    }
  }
  return-1

}

function calculate(num1:number, num2:number, operador:string):number{
  switch(operador) {
    case "+":
    return num1 + num2;
    
    case "-":
    return num1 - num2;

    case "*":
    return num1 * num2;

    case "/":
    return num1 / num2;

    default: return 0;
  }
}
console.log(MissingDigit("3x + 12 = 46"));