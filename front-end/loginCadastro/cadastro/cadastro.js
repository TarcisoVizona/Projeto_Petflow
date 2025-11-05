const cadastrar = document.querySelector("button");

//registro de usuarios
cadastrar.addEventListener("click" , async () => {
    const nome = document.querySelector("#usuario").value
    const email = document.querySelector("#email").value
    const telefone = document.querySelector("#telefone").value
    const senha = document.querySelector("#senha").value
    if (nome == "" || email == "" || telefone == "" || senha == ""){
       return alert("Todos os campos devem ser preenchidos");
    }
    const resposta = await fetch ("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome,
            email,
            telefone,
            senha,
    })
    })
    if (resposta.status == 200) {
       return window.location.href = "../login/login.html"
    }
    return alert("Erro ao cadastrar");
})