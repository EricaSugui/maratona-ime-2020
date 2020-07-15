let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
    let max = 9;
    return Math.floor(Math.random()*Math.floor(max));
}

function compareGuesses(human, computer, secret) {
    //let humanDiff = Math.abs(human - secret);
    if (human.length < 4) {
        alert ("Por favor inserir o ano de nascimento com 4 dígitos.")
    }
    else if (computer.length < 4) {
        alert ("Por favor inserir o ano de início da graduação com 4 dígitos.")
    }
    else if (human <= 1920) {
        alert("Você está dizendo que tem mais de 100 anos, isso está certo?")
    }
    else if (computer <= 1920) {
        alert("Você está dizendo que começou um curso superior a mais de 100 anos, isso está certo?")
    }
    else if (human < 1997 && computer < 2016) {
        alert("Você nasceu antes de 1997 e iniciou graduação correlata antes de 2016, portanto você não é elegível.")
    }
    else if (human < 1997 && computer >= 2016) {
        alert("Tudo certo! Você nasceu antes de 1997 porém iniciou estudos correlatos após 2016, bem vindo à Maratona!")
    }
    else if (human >= 1997 && computer >= 2013){
        alert("Você nasceu após 1997 e é universitário, bem vindo à Maratona!")
    }
    else if (human >= 1997 && computer < 2013) {
        alert("Confira seus dados, é improvável que vc tenha iniciado sua graduação nesse ano.")
    }
    else {
        alert("Confira seus dados e tente novamente.")
    }
    
}

function getAbsoluteDistance(a, b) {
    return Math.abs(a - b);
}

