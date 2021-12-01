function carregarTodosPostos() {
    return JSON.parse(localStorage.getItem("arrayPostos") || "[]");
}

function buscarPosto(id) {
    return carregarTodosPostos().find(i => String(i.id) === String(id));
}

function salvarPosto(posto) {
    const dadosAtualizados = carregarTodosPostos().map(i => {
        if(String(i.id) === String(posto.id)) {
            return posto;
        }
        return i;
    });
    localStorage.setItem("arrayPostos", JSON.stringify(dadosAtualizados));
}


const idPosto = new URLSearchParams(window.location.search).get("id");
const postoAtual = buscarPosto(idPosto);


async function requirirIdPagina() {
    if(!postoAtual) {
        await swal("Ops!", "Nenhum posto foi informado ao acessar essa página", "warning");
        location.href = "Homepage_LOGADO.html";
    }
}
requirirIdPagina();


async function handleAvaliar() {
    const avaliacao = {
        mensagem: String(document.getElementById("comentario_avaliacao").value).trim(),
        usuario: pegarUsuarioLogado().nome,
        gostou: document.querySelector('input[name="avaliacao"]:checked').value === "SIM"
    };

    if(!avaliacao.mensagem) {
        return swal("Ops!", "A mensagem não pode ser vazia", "warning");
    }
    if(await swal("", "Tem certeza que deseja registrar essa avaliação ?", "warning", {buttons: ["Não", true], dangerMode: true})) {
        if(!Array.isArray(postoAtual.avaliacoes)) {
            postoAtual.avaliacoes = [];
        }
        
        postoAtual.avaliacoes.push(avaliacao);
        salvarPosto(postoAtual);
        await swal("Sucesso", "A sua avaliação foi registrada!", "success");
        location.href = "Homepage_LOGADO.html";
    }

}