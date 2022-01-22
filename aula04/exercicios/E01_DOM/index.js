var lista = document.createElement("ul");
function cadastrar(){
    const nome = document.querySelector("#nome").value;
    const painel = document.querySelector("#lista");
    const item = document.createElement("li");
    painel.innerHTML = "<h1>Olá DOM</h1>"
    item.textContent = nome;
    lista.appendChild(item);
    painel.appendChild(lista);

}
