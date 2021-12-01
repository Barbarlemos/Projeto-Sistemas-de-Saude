function carregarTodosPostos() {
    return JSON.parse(localStorage.getItem("arrayPostos") || "[]");
}

function buscarPosto(id) {
    return carregarTodosPostos().find(i => String(i.id) === String(id));
}

function calcularVotos({avaliacoes}) {
    const totalAvaliacoes = {
        positivo: 0,
        negativo: 0
    };
    if(Array.isArray(avaliacoes)) {
        for(const i of avaliacoes) {
            if(i.gostou) {
                totalAvaliacoes.positivo += 1;
            } else {
                totalAvaliacoes.negativo += 1;
            }
        }
    }
    return totalAvaliacoes;
}



function renderizarAvaliacoes(avaliacoes) {
    const htmls = [];
    for(const i of avaliacoes) {
        htmls.push(`
            <div class="col-sm-4 col-12">
                <div class="comentario-posto">
                    <h1 class="titulo">
                        ${i.usuario} avaliou como <span class="material-icons-outlined"
                            target="AvalPosto">${i.gostou ? 'thumb_up' : 'thumb_down'}</span> e comentou:
                    </h1>
                    <p class="corpo">${i.mensagem}</p>
                </div>
            </div>`);
    }
    const chunks = htmls.reduce((all,one,i) => {
        const ch = Math.floor(i/3); 
        all[ch] = [].concat((all[ch]||[]),one); 
        return all
    }, []);

    let first = true;
    const rows = chunks.map(i=> {
        let ativo = first ? "active": "";
        first = false;
        return `
            <div class="carousel-item ${ativo}">
                <div class="row">
                    ${i.join("\n\n")}
                </div>
            </div>
        `;
    });

    return rows.join("\n\n<!--SEPARADOR COMENTARIOS-->\n\n");
}
function renderizarEspecialidades(servicos) {
    const todos = ["Clínica","Laboratório","Odontologia","Psicologia","Vacinação","Curativos","Farmacia"];
    html = "";
    for(const servico of todos) {
        html += `<div class="col especialidade"> ${servico} <span class="material-icons-outlined">${servicos.includes(servico) ? "done" : "close"}</span></div>`;
    }
    return html;
}
function renderizarModalDetalhesPosto(id, habilitarAvaliacao=true) {
    const posto = buscarPosto(id);
    console.log(posto);
    const endereco = "R. "+posto.adress + ", bairro "+ posto.bairro + ", " + posto.Municipio;
    const totalAvaliacoes = calcularVotos(posto);
    const modal =  `
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-center w-100">
                        <div class="row">
                            <div class="col-md-3">${posto.id}</div>
                            <div class="col-md-3">Posto ${posto.nome}</div>
                            <div class="col-md-3">${endereco}</div>
                            <div class="col-md-3">${posto.Tel}</div>
                        </div>
                    </h5>
                </div>
                <div class="modal-body">
                    <div class="row">
                        ${renderizarEspecialidades(posto.Serv)}
                    </div>

                    <div class="icones-avaliacao">
                        <span class="icones">
                            <span class="material-icons-outlined">thumb_up</span>${totalAvaliacoes.positivo}
                        </span>
                        <span class="icones">
                            <span class="material-icons-outlined">thumb_down</span>${totalAvaliacoes.negativo}
                        </span>
                    </div>


                    <div class="row">
                        <div id="carouselcomentarios" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${renderizarAvaliacoes(posto.avaliacoes ?? [])}
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselcomentarios"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselcomentarios"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>


                </div>
                <div class="modal-footer" id="modal-footer">
                    <button type="button" class="btn-opcoes" data-bs-dismiss="modal">Minimizar</button>
                    <button type="button" class="btn-opcoes" onclick="location.href = 'Avaliar_Posto.html?id=${posto.id}'" ${habilitarAvaliacao ? "" : "disabled"}>Avaliar</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("detalhes-posto").innerHTML = modal;
}



function renderizarLinhaPosto({id, nome, Municipio, Tel, adress, bairro, numero, avaliacoes}, habilitarAvaliacao=true) {
    const endereco = adress + " , " + numero + " - " + bairro + " , " + Municipio + ".";
    const totalAvaliacoes = calcularVotos({avaliacoes});

    const parametroAvaliacao = habilitarAvaliacao ? "true": "false";
    return `
        <tr>
            <td>
                <a href="#detalhes-posto" data-bs-toggle="modal" data-bs-target="#detalhes-posto" onclick="renderizarModalDetalhesPosto('${id}', ${parametroAvaliacao})">
                    <span class="material-icons-outlined">
                        info
                    </span>
                </a>
            </td>
            <td class="Num" id="Nu0" scope="row">${id}</td>
            <td class="Nome" id="No0">${nome}</td>
            <td class="Ender" id="End0">${endereco}</td>
            <td class="Tel" id="Tel0">${Tel}</td>
            <td class="Likes" id="Li0"><span class="material-icons-outlined"
                    target="AvalPosto">thumb_up</span>${totalAvaliacoes.positivo}
            </td>
            <td class="Dislikes" id="Di0"><span class="material-icons-outlined"
                    target="NegAvalPosto">thumb_down</span>${totalAvaliacoes.negativo}
            </td>
        </tr>
    `;
}

function buscarParametrosURL() {
    const url = new URLSearchParams(location.search);
    return {
        regiao: url.get("regiao"),
        servico: url.get("servico"),
        ordenacao: url.get("ordenacao"),
    };
}

function renderizarListaPostos(idLista, habilitarAvaliacao=true, filtroTexto = "") {
    let html = "";
    const parametros = buscarParametrosURL();
    let pesquisa = carregarTodosPostos();

    function simplificarTexto(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/ /g, "");
    }

    function compararTextos(txt1, txt2) {
        return simplificarTexto(txt1) === simplificarTexto(txt2);
    }

    if(parametros.regiao) {
        document.getElementById("regiao_atual").innerText = parametros.regiao === "Todas regiões" ? "toda região metropolitana" : parametros.regiao;
        if(!simplificarTexto(parametros.regiao).startsWith("todas")) {
            pesquisa = pesquisa.filter(i=> compararTextos(i.Municipio, parametros.regiao));
        }
    }
    if(parametros.servico) {
        const servico = simplificarTexto(parametros.servico);
        if(!servico.startsWith("todos")) {
            pesquisa = pesquisa.filter(i => {
                const exists = i.Serv.find(j=>simplificarTexto(j) === servico);
                return !!exists;
            });
        }
    }

    if(filtroTexto) {
        const filtroLimpo = filtroTexto.toLowerCase();
        pesquisa = pesquisa.filter(i=> JSON.stringify(i).toLowerCase().indexOf(filtroLimpo) !== -1);
    }

    if(parametros.ordenacao) {
        
        pesquisa = pesquisa.map(i => {
            const votos = calcularVotos(i);
            return {...i, votos};
        });
        if(parametros.ordenacao === "Melhor avaliados") {
            pesquisa = pesquisa.sort((a,b) => b.votos.positivo - a.votos.positivo).sort((a,b) => (b.votos.positivo - b.votos.negativo) - (a.votos.positivo - a.votos.negativo));
        }

        if(parametros.ordenacao === "Mais avaliados") {
            pesquisa = pesquisa.sort((a,b) => (b.votos.positivo + b.votos.negativo) - (a.votos.positivo + a.votos.negativo));
        }

        if(parametros.ordenacao === "Alfabética") {
            pesquisa = pesquisa.sort((a,b) => a.nome > b.nome ? 1 : -1);
        }
    }

    for(const posto of pesquisa) {
        html += renderizarLinhaPosto(posto, habilitarAvaliacao);
    }

    document.getElementById(idLista).innerHTML = html;
}





///////////////////////// FUNCOES DE FILTRO
function fregiao(valor) {
    const url = new URLSearchParams(location.search);
    url.set("regiao", valor);
    location.href = location.href.split("?")[0] + "?" + url.toString();
}

function fservico(valor) {
    const url = new URLSearchParams(location.search);
    url.set("servico", valor);
    location.href = location.href.split("?")[0] + "?" + url.toString();
}

function fordenacao(valor) {
    const url = new URLSearchParams(location.search);
    url.set("ordenacao", valor);
    location.href = location.href.split("?")[0] + "?" + url.toString();
}