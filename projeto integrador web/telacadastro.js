function logar(){

    let banco = JSON.parse(localStorage.getItem("banco")) || [];
    
    let name = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value


    let newUser = {nome:name,email:email,senha:senha}

    banco.push(newUser)

    localStorage.setItem("banco",JSON.stringify(banco))

    window.open("login.html")

}

function login(){
    window.open("login.html")
}
