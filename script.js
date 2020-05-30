function executaSorteio()
{
 aleatorio=Math.round(Math.random()*10)
  //console.log(aleatorio)
  tentativa=prompt(`Digite seu número da sorte de 0 a 10`)
  
  //alert("Número Inválido")// se a pessoa digitar um numero maior do que o 10, aparece esse alert
  
  while(tentativa>10 || tentativa<0 ){
    tentativa=prompt("Número inválido, digite um valor de 0 a 10") 
  }
  
  numerocerto=tentativa==aleatorio
  
  if(numerocerto){
    paragrafoResultado.innerHTML=`Você ganhou o sorteio!!!!`
  }
    if(!numerocerto){
    paragrafoResultado.innerHTML=`Tente Outra Vez`
    
    paragrafoResultado.style.backgroundColor="grey"
  }
}