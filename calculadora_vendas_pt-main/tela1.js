
    


function calculaPreco(){
    let produto = document.getElementById('custo').value;
    let margem = document.getElementById('margemDesejada').value;
    const tipo_venda = document.getElementById('tipo').value;
    let marketplace = document.getElementById('job').value;
    console.log(margem);
    
    if(tipo_venda.value == 'Classico' ){
        
        let taxa = 0.32;
        let venda = produto / (1-(taxa) - margem);
        let doladotx = venda * 0.075;
        let custoR = produto + doladotx;
        let impostos = venda * 0.05;
        let taxaMl = venda * 0.165;
        let custoMl = taxaMl + 6;
        let lucro = venda - produto - custoMl - doladotx;
        let lucroLiq = lucro - impostos;
        
        document.getElementById('tr1').innerHTML = `O produto custa:${produto}` ;
        document.getElementById('tr2').innerHTML = `A margem aplicada é:${margem}` ;
        document.getElementById('tr3').innerHTML = `O tipo de venda é:${tipo_venda}` ;
        document.getElementById('tr4').innerHTML = `A taxa aplicada é: ${taxa}` ;
        document.getElementById('tr5').innerHTML = `O preço de venda é:${venda}` ;
        document.getElementById('tr6').innerHTML = `A taxa do ML é: ${taxaMl}` ;
        document.getElementById('tr7').innerHTML = `O custo ML é: ${custoMl}`  ;
        document.getElementById('tr8').innerHTML = `A taxa dolado é: ${doladotx}` ;
        document.getElementById('tr9').innerHTML = `O custo real é: ${custoR}`  ;
        document.getElementById('tr10').innerHTML = `O custo de impostos é: ${impostos}`  ;
        document.getElementById('tr11').innerHTML = `A lucro bruto é:${lucro}` ;
        document.getElementById('tr12').innerHTML = `O lucro líquido é: ${lucroLiq}`  ;
        document.getElementById('tr13').innerHTML = `O tipo de venda é:${marketplace}` ;

    }
    else {
        
        let taxa = 0.27
        let venda = produto / (1-(taxa) - margem);
        let doladotx = venda * 0.075;
        let custoR = produto + doladotx;
        let impostos = venda * 0.05;
        let taxaMl = venda * 0.115;
        let custoMl = taxaMl + 6;
        let lucro = venda - produto - custoMl;
        let lucroLiq = lucro - impostos;
        document.getElementById('tr1').innerHTML = `O produto custa:${produto}` ;
        document.getElementById('tr2').innerHTML = `A margem aplicada é:${margem}` ;
        document.getElementById('tr3').innerHTML = `O tipo de venda é:${tipo_venda}` ;
        document.getElementById('tr4').innerHTML = `A taxa aplicada é: ${taxa}` ;
        document.getElementById('tr5').innerHTML = `O preço de venda é:${venda}` ;
        document.getElementById('tr6').innerHTML = `A taxa do ML é: ${taxaMl}` ;
        document.getElementById('tr7').innerHTML = `O custo ML é: ${custoMl}`  ;
        document.getElementById('tr8').innerHTML = `A taxa dolado é: ${doladotx}` ;
        document.getElementById('tr9').innerHTML = `O custo real é: ${custoR}`  ;
        document.getElementById('tr10').innerHTML = `O custo de impostos é: ${impostos}`  ;
        document.getElementById('tr11').innerHTML = `A lucro bruto é:${lucro}` ;
        document.getElementById('tr12').innerHTML = `O lucro líquido é: ${lucroLiq}`  ;
        

    }
        
    
}


    

    
       



   





    



