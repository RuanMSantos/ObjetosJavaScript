let alunos = [];

function Adicionar(){
    aluno = { 
    "nome": document.getElementById("nome").value,
    "data": document.getElementById("data").value,
    "email": document.getElementById("email").value,
    "curso": document.getElementById("curso").value
}
    alunos.push(aluno);
    LimparCampos();
}

function ViewAluno(){
    console.log(alunos);
}

function LimparCampos(){
    document.getElementById("nome").value = "",
    document.getElementById("data").value = "",
    document.getElementById("email").value = "",
    document.getElementById("curso").value = ""
    
}

function ViewName(){
    for (let i = 0; i < alunos.length; i++){
        console.log(alunos[i].nome);
    }
}

function UpdateCursos(){
    for (let i = 0; i < alunos.length; i++) {
        alunos[i].curso = "Informática";
    }
}