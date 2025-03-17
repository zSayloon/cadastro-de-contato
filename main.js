const form = document.getElementById('form-cadastro'); //puxa o id do form
const nome = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaLinha();
    atualizaTabela();
})


function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    
    if(nome.includes(inputNome.value)){
        alert(`O nome ${inputNome.value} já foi adicionado`)
    }
    else{
        nome.push(inputNome.value);
        telefone.push(inputTelefone.value);
        
        let linha = `<tr>`;
        linha += `<td> ${inputNome.value}</td>`;
        linha += `<td> ${inputTelefone.value}</td>`;
        linha += `</tr>`;
        
        linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}