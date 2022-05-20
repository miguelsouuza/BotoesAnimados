    
        function MudarCor(){
        
       Cor1(),Cor2(),Cor;
       

        function Cor1(){
        const click = document.querySelector("div#botao")
        click.style.background="red"
        document.body.style.background="yellow"
        click.style.color="yellow"
        click.addEventListener('click',Cor2)
        }

        function Cor2(){
        const click = document.querySelector("div#botao")
        click.style.background="green"
        document.body.style.background="red"
        click.style.color="red"
        click.addEventListener('click',Cor)
        }
        function Cor(){
        const click = document.querySelector("div#botao")
        click.style.background="yellow"
        document.body.style.background="green"
        click.style.color="green"
        click.addEventListener('click',Cor1)
        }
    }
        
  
