

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
                

                resultado2.value = formatCurrency(produto);
                resultado4.value = formatCurrency(venda);
                resultado3.value = formatCurrency(porcentagem);
        

}

function shopee(){
        
        let produto = fixValue(custo.value);
        let porcentagem = fixValue(margem.value) / 100;
        let taxa = 0.275 ;
        let venda = produto / (1-(taxa) - porcentagem);
        
        produto = produto.toFixed(2);
        venda = venda.toFixed(2);
        porcentagem = porcentagem.toFixed(2);

        resultado2.value = formatCurrency(produto);
        resultado4.value = formatCurrency(venda);
        resultado3.value = formatCurrency(porcentagem);




}























/*let dolar = 5.1;

let usdInput = document.querySelector('#usd');
let brlInput = document.querySelector('#brl');

usdInput.addEventListener('keyup', () =>{
        convert("usd-to-brl");
        console.log("apertou 2");
        
})
brlInput.addEventListener('keyup', () =>{
        convert("brl-to-usd");
        console.log("apertou 1");
        
})
usdInput.value = "1000,00";
convert("usd-to-brl");

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

function convert(type){
        if(type == "usd-to-brl"){
                let fixedValue = fixValue(usdInput.value);

                let result = fixedValue * dolar;
                result = result.toFixed(2);

                brlInput.value = formatCurrency(result);
        }
        if(type == "brl-to-usd"){
                let fixedValue = fixValue(brlInput.value);
                let result = fixedValue / dolar;
                result = result.toFixed(2);
                usdInput.value = formatCurrency(result);
        }


}*/


