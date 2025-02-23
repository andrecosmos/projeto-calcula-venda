let precoVenda  = document.querySelector('#preco-venda');
let produto = document.querySelector('#produto');
let frete = document.querySelector('#frete');
let marketplace = document.querySelector('#job');


botao1 = document.querySelector('#botao1');

botao1.addEventListener('click', () =>{
    if(job.value == "Ml"){
        mercadoLivre();
    }
    if(job.value == "Sh"){
        shopee();

    }
    
    
})

function formatCurrency(value){
    let fixedValue = fixValue(value);
    let options ={
            useGrouping: false,
            ninimumFractionDigits: 2
    }
    let formatter = new Intl.NumberFormat("pt-BR",options);
    return formatter.format(fixedValue);
}

function fixValue(value){
    let fixedValue = value.replace(",",".");
    let floatValue = parseFloat(fixedValue);
    if(floatValue == NaN){
            floatValue = 0 ;
    }
    return floatValue;
}


function mercadoLivre(){
        
    let custo = fixValue(produto.value);
    custo = custo.toFixed(2);
    resultado4.value = formatCurrency(custo);

    
    let taxaDolado = fixValue(precoVenda.value) * 0.075;
    taxaDolado = taxaDolado.toFixed(2);
    resultado5.value = formatCurrency(taxaDolado);

    let investimento = fixValue(produto.value) + fixValue(taxaDolado);
    investimento = investimento.toFixed(2);
    resultado1.value = formatCurrency(investimento);


    let taxaMlivre = fixValue(precoVenda.value) * 0.165;
    let taxaFixa = 6.75 ;
    

    let retorno = fixValue(precoVenda.value) - investimento - taxaMlivre - taxaFixa;
    retorno = retorno.toFixed(2);
    resultado2.value = formatCurrency(retorno);

    let lucroPercentual = fixValue(retorno) / fixValue(investimento) * 100;
    lucroPercentual = lucroPercentual.toFixed(2);
    resultado3.value = (lucroPercentual);
    


}


function shopee(){
        
    let custo = fixValue(produto.value);
    custo = custo.toFixed(2);
    resultado4.value = formatCurrency(custo);

    
    let taxaDolado = fixValue(precoVenda.value) * 0.075;
    taxaDolado = taxaDolado.toFixed(2);
    resultado5.value = formatCurrency(taxaDolado);

    let investimento = fixValue(produto.value) + fixValue(taxaDolado);
    investimento = investimento.toFixed(2);
    resultado1.value = formatCurrency(investimento);


    let taxaMlivre = fixValue(precoVenda.value) * 0.20;
    let taxaFixa = 4 ;
    
    

    let retorno = fixValue(precoVenda.value) - investimento - taxaMlivre - taxaFixa;
    retorno = retorno.toFixed(2);
    resultado2.value = formatCurrency(retorno);

    let lucroPercentual = fixValue(retorno) / fixValue(investimento) * 100;
    lucroPercentual = lucroPercentual.toFixed(2);
    resultado3.value = (lucroPercentual);
    


}


