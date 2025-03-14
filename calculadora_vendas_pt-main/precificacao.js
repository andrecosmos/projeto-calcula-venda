

let custo = document.querySelector('#produto');
let margem = document.querySelector('#margem');
let marketplace = document.querySelector('#job');

butao = document.querySelector('#botao1');

butao.addEventListener('click', () =>{
       if(job.value == "Ml" ){

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
        
        let produto = fixValue(custo.value);
        let porcentagem = fixValue(margem.value) / 100;
        
        let taxa = 0.24 ;
        let venda = produto / (1-(taxa) - porcentagem);
        produto = produto.toFixed(2);
        venda = venda.toFixed(2);
        porcentagem = porcentagem.toFixed(2);
        
        document.getElementById('resultado2').innerHTML = `O produto custa:${produto}` ;
        document.getElementById('resultado3').innerHTML = `Com margem de Lucro de :${porcentagem}` ;
        document.getElementById('resultado4').innerHTML = `O preço Sugerido é :${venda}` ;
}

function shopee(){
        
        let produto = fixValue(custo.value);
        let porcentagem = fixValue(margem.value) / 100;
        let taxa = 0.275 ;
        let venda = produto / (1-(taxa) - porcentagem);
        
        produto = produto.toFixed(2);
        venda = venda.toFixed(2);
        porcentagem = porcentagem.toFixed(2);

        document.getElementById('resultado2').innerHTML = `O produto custa:${produto}` ;
        document.getElementById('resultado3').innerHTML = `Com margem de Lucro de :${porcentagem}` ;
        document.getElementById('resultado4').innerHTML = `O preço Sugerido é :${venda}` ;
}























