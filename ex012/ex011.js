var idade = 69;

console.log(`Você têm ${idade} anos`);

if (idade < 16 ){
    console.log('Não vota');
}else if(idade < 18 || idade >= 70){
    console.log('voto opcional');
}else {
    console.log('voto obrigatório');
}

