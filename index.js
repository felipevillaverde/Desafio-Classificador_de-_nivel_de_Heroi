"Desafio Classificador de nível de Herói"

let nomeHeroi = "João";
let nivelXpHeroi = 1.00;

if(nivelXpHeroi <= 1.000){
    console.log("O Herói " + nomeHeroi + " é nível Ferro")
}else if(nivelXpHeroi > 1.000 && nivelXpHeroi <= 2.000){
    console.log("O Herói " + nomeHeroi + " é nível Bronze")
}else if(nivelXpHeroi > 2.000 && nivelXpHeroi <= 5.000){
    console.log("O Herói " + nomeHeroi + " é nível Prata")
}else if(nivelXpHeroi > 5.000 && nivelXpHeroi <= 7.000){
    console.log("O Herói " + nomeHeroi + " é nível Ouro")
}else if(nivelXpHeroi > 7.000 && nivelXpHeroi <= 8.000){
    console.log("O Herói " + nomeHeroi + " é nível Platina")
}else if(nivelXpHeroi > 8.000 && nivelXpHeroi <= 9.000){
    console.log("O Herói " + nomeHeroi + " é nível Ascendente")
}else if(nivelXpHeroi > 9.000 && nivelXpHeroi <= 10.000){
    console.log("O Herói " + nomeHeroi + " é nível Imortal")
}else{
    console.log("O Herói " + nomeHeroi + " é nível Radiante")
}