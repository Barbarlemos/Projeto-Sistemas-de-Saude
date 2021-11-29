function carregarUsuarios() {
    // usuarios padrao
    const defaultUsers = [
        {
            login: "admin",
            senha: "senha123",
            papel: "admin",
            bairro: "admin",
            cep: "00000000",
            cidade: "admin",
            email: "admin@admin.com",
            nome: "Admin",
            numero: "0",
            rua: "Rua Admin"
        },
        {
            login: "usuario",
            senha: "senha123",
            papel: "usuario",
            bairro: "usuario",
            cep: "00000000",
            cidade: "usuario",
            email: "usuario@test.com",
            nome: "Usuário",
            numero: "0",
            rua: "Rua do usuário"
        }
    ];
    
    // usuarios do localstorage
    const storageUsers = localStorage.getItem("usuarios-cadastrados");

    return storageUsers ? JSON.parse(storageUsers):defaultUsers;
}

function adicionarUsuario(usuario) {
    const users = carregarUsuarios()
    const usuarioExiste = users.find(user => user.login === usuario.login);
    if(usuarioExiste) {
        throw new Error("O usuário selecionado já existe");
    }
    users.push(usuario);
    localStorage.setItem("usuarios-cadastrados", JSON.stringify(users));
}


function login(event) {
    event.preventDefault();
    const users = carregarUsuarios();

    const usuario = document.getElementsByName("usuario")[0].value;
    const senha = document.getElementsByName("senha")[0].value;

    const usuarioLogado = users.find(user => user.login === usuario && user.senha === senha);
    if(usuarioLogado) {
        localStorage.setItem("usuario", JSON.stringify(usuarioLogado));
        location.href = 'Homepage_'+(usuarioLogado.papel === 'admin' ? 'ADMIN': 'LOGADO')+'.html';
    } else {
        swal("Erro", "Usuário e/ou senha incorretos", "error");
    }
}

function handlerEsqueciSenha() {
    const usuario = document.getElementsByName("usuario")[0].value;
    if(!usuario) {
        swal("Erro", "Digite um usuário para resetar a senha", "error");
    } else {
        swal("Sucesso", "Caso algum usuário com esse login exista será encaminhado para sua caixa de email o link para redefinição de senha", "success");
    }

}


function handlerCep() {
    const cep = document.getElementsByName("cep")[0].value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(res => res.json()).then(obj => {
        document.getElementsByName("rua")[0].value = obj.logradouro;
        document.getElementsByName("bairro")[0].value = obj.bairro;
        document.getElementsByName("cidade")[0].value = obj.localidade;
    }).catch(err => {
        swal("Erro", "Cep inválido, não iremos te impedir de realizar o cadastro mas tenha certeza de estar inserindo local correto", "error");
    });
}


function handlerCadastrarUsuario(event) {
    event.preventDefault();
    const nome = document.getElementsByName("nome")[0].value;
    const email = document.getElementsByName("email")[0].value;
    const cep = document.getElementsByName("cep")[0].value;
    const rua = document.getElementsByName("rua")[0].value;
    const numero = document.getElementsByName("numero")[0].value;
    const bairro = document.getElementsByName("bairro")[0].value;
    const cidade = document.getElementsByName("cidade")[0].value;
    const senha = document.getElementsByName("senha")[0].value;
    const senha1 = document.getElementsByName("senha1")[0].value;

    const validos = [nome,
        email,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        senha,
        senha1].map(i => !!i);

    if(validos.includes(false)) {
        swal("Erro", "Todos os campos devem ser preenchidos", "error");
        return;
    }

    const usuario = {
        nome,
        email,
        cep,
        rua,
        numero,
        bairro,
        cidade,
        senha,
        login: email,
        papel: "usuario"
    };

    if(senha !== senha1) {
        swal("Erro","A senhas digitadas não são iguais", "error");
    } else {
        try {
            adicionarUsuario(usuario);
            swal("Sucesso", "Usuário adicionado!", "success").then(()=>{
                location.href = 'Homepage.html';
            });
        } catch (error) {
            swal("Erro",error.message, "error");
        }
    }


}

function logout() {
    localStorage.removeItem("usuario");
    location.href = 'Homepage.html';
}

function pegarUsuarioLogado() {
    return JSON.parse(localStorage.getItem("usuario"));
}