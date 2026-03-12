let ordens = JSON.parse(localStorage.getItem("ordens")) || []
let editando = null

function salvarLocal(){
localStorage.setItem("ordens", JSON.stringify(ordens))
}

function render(){
let lista = document.getElementById("listaOS")
lista.innerHTML=""

ordens.forEach((os,i)=>{

lista.innerHTML += `
<tr>
<td>${i+1}</td>
<td>${os.cliente}</td>
<td>${os.aparelho}</td>
<td>${os.status}</td>
<td>
<button onclick="editar(${i})">Abrir</button>
</td>
</tr>
`

})

}

function novaOS(){
editando = null
document.getElementById("modal").style.display="block"
}

function fechar(){
document.getElementById("modal").style.display="none"
}

function salvarOS(){

let os = {

cliente:cliente.value,
telefone:telefone.value,
aparelho:aparelho.value,
imei:imei.value,
problema:problema.value,
servico:servico.value,
status:status.value

}

if(editando==null){
ordens.push(os)
}else{
ordens[editando]=os
}

salvarLocal()
render()
fechar()

}

function editar(i){

let os = ordens[i]

cliente.value=os.cliente
telefone.value=os.telefone
aparelho.value=os.aparelho
imei.value=os.imei
problema.value=os.problema
servico.value=os.servico
status.value=os.status

editando=i

document.getElementById("modal").style.display="block"

}

function buscarOS(){

let termo = document.getElementById("busca").value.toLowerCase()

let linhas = document.querySelectorAll("tbody tr")

linhas.forEach(linha=>{

linha.style.display =
linha.innerText.toLowerCase().includes(termo)
? ""
: "none"

})

}

render()