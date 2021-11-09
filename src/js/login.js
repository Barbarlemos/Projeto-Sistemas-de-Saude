function carregarUsuarios() {
    // usuarios padrao
    const defaultUsers = [
        {
            login: "admin",
            senha: "senha123",
            papel: "admin"
        },
        {
            login: "usuario",
            senha: "senha123",
            papel: "usuario"
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

function logout() {
    localStorage.removeItem("usuario");
    location.href = 'Homepage.html';
}

function pegarUsuarioLogado() {
    return JSON.parse(localStorage.getItem("usuario"));
}