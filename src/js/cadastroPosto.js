function cadst() {


    const postoObj = {
        id: new Date().getTime(),
        nome: String(document.getElementById("nome").value),
        cep: String(document.getElementById("cep").value),
        adress: String(document.getElementById("adress").value),
        numero: String(document.getElementById("num").value),
        bairro: String(document.getElementById("bairro").value),
        Municipio: String(document.getElementById("Mun").value),
        Tel: String(document.getElementById("Tel").value),
        HoraAbertura: String(document.getElementById("abert").value),
        HoraFechamento: String(document.getElementById("fech").value),
        Serv: []
    }

    const ServClinica = document.getElementById("clinicaBox").checked
    const ServLab = document.getElementById("labBox").checked
    const ServOdon = document.getElementById("odonBox").checked
    const ServPsi = document.getElementById("psiBox").checked
    const ServVac = document.getElementById("vacBox").checked
    const ServCur = document.getElementById("curBox").checked
    const ServFarm = document.getElementById("farmBox").checked

    const TdsServ = [ServClinica, ServLab, ServOdon, ServPsi, ServVac, ServCur, ServFarm]

    for (i = 0; i < TdsServ.length; i++) {
        switch (i) {
            case 0:
                if (ServClinica === true) {
                    postoObj.Serv.push("Clínica")
                }
                break;
            case 1:
                if (ServLab === true) {
                    postoObj.Serv.push("Laboratório")
                }
                break;
            case 2:
                if (ServOdon === true) {
                    postoObj.Serv.push("Odontologia")
                }
                break;
            case 3:
                if (ServPsi === true) {
                    postoObj.Serv.push("Psicologia")
                }
                break;
            case 4:
                if (ServVac === true) {
                    postoObj.Serv.push("Vacinação")
                }
                break;
            case 5:
                if (ServCur === true) {
                    postoObj.Serv.push("Curativos")
                }
                break;
            case 6:
                if (ServFarm === true) {
                    postoObj.Serv.push("Farmacia")
                }
                break;
        }
    }


    if (localStorage.getItem("arrayPostos") === null) {

        const arrayPostos = []
        arrayPostos.push(postoObj)
        let arrayPostosJson = JSON.stringify(arrayPostos)
        localStorage.setItem("arrayPostos", arrayPostosJson)

    } else {

        const arrayPostos = JSON.parse(localStorage.getItem("arrayPostos"))
        arrayPostos.push(postoObj)
        let arrayPostosJson = JSON.stringify(arrayPostos)
        localStorage.setItem("arrayPostos", arrayPostosJson)

    }

    alert(postoObj.nome + " cadastrado com sucesso!")

}