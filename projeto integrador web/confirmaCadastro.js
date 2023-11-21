function login(){
        let banco = JSON.parse(localStorage.getItem("banco"));

        let nome = document.querySelector("#nome").value
        let senha = document.querySelector("#senha").value
        for(let i = 0; i < banco.length; i++){
        if(banco[i] == null){
            alert("Volte e realize seu cadastro!")
            window.open("telacadastro.html")
            return banco
        }else{
            if(nome === banco[i].nome && senha === banco[i].senha){
                window.open("index.html")//Necessario substituir o caminho do site, pois isso foi apenas para testar
                return banco
            }
        }
    }
        alert("cadastre-se")
        window.open("telacadastro.html")
}

function cadastrar(){
    window.open("telacadastro.html")
}