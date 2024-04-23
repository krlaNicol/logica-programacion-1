
let mayor;
let num1= parseInt(window.prompt("ingrese el primer numero"));
let num2= parseInt(window.prompt("ingrese el segundo numero"));
let num3= parseInt(window.prompt("ingrese el tercer numero"));

//Codigo de mayor a menor 

if  (num1 > num2 && num2 > num3){
         alert("Los numeros de mayor a menor son: " +num1 +num2 +num3)
     } else if (num1 >= num3 && num3 >= num2){
        alert("Los numeros de mayor a menor son: " +num1 +num3 +num2)
     }
     else if (num2 >= num1 && num1 >= num3){
        alert("Los numeros de mayor a menor son: " +num2 +num1 +num3)
     }
     else if (num2 >= num3 && num3 >= num1){
        alert("Los numeros de mayor a menor son: " +num2 +num3 +num1)
     }
     else if (num3 >= num1 && num1 >= num2){
        alert("Los numeros de mayor a menor son: " +num3 +num1 +num2)
     }
     if (num3 >= num2 && num2 >= num1){
        alert("Los numeros de mayor a menor son: " +num3 +num2 +num1)
     }

//Codigo de Menor a mayor

if (num1 <= num2 && num2 <= num3){
   alert("Los numeros de menor a mayor son: " +num1 +num2 +num3)
     } 
     else if (num1 <= num3 && num3 <= num2){
  alert("Los numeros de menor a mayor son: " +num1 +num3 +num2)
     }
    else if (num2 <= num1 && num1 <= num3){
  alert("Los numeros de menor a mayor son: " +num2 +num1 +num3)
     }
else if (num2 <= num3 && num3 <= num1){
  alert("Los numeros de menor a mayor son: " +num2 +num3 +num1)
     }
else if (num3 <= num1 && num1 <= num2){
  alert("Los numeros de menor a mayor son: " +num3 +num1 +num2)
     }
if (num3 <= num2 && num2 <= num1){
  alert("Los numeros de menor a mayor son: " +num3 +num2 +num1)
}

//Codigo de comparación

if (num1===num2&&num1===num3){
  alert("Todos los numeros son iguales: " +num1 +num2+num3)
   }
   else if (num1===num3&&num3===num2){
      alert("Todos los numeros son iguales: " +num1 +num3+num2)
   }
   else if (num2===num1&&num1===num3){
      alert("Todos los numeros son iguales: " +num2 +num1+num3)
   }
   else if (num2===num3&&num3===num1){
      alert("Todos los numeros son iguales: " +num2 +num3+num1)
   }
   else if (num3===num1&&num1===num2){
      alert("Todos los numeros son iguales: " +num3 +num1+num2)
   }
    if (num3===num2&&num2===num1){
      alert("Todos los numeros son iguales: " +num1 +num2+num3)
   }
