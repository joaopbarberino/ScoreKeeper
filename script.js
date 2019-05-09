let form_botao = document.getElementById("form_botao"),
    objetivo_form = document.getElementById("objetivo_form"),
    objetivo = document.getElementById("objetivo"),
    valor_objetivo = Number(objetivo.innerText),

    placar_player1 = document.getElementById("score_player1"),
    placar_player2 = document.getElementById("score_player2"),
    placar_player3 = document.getElementById("score_player3"),
    placar_player4 = document.getElementById("score_player4"),
    player1_botao = document.getElementById("player1_marcou"),
    player2_botao = document.getElementById("player2_marcou"),
    player3_botao = document.getElementById("player3_marcou"),
    player4_botao = document.getElementById("player4_marcou"),
    span3 = document.getElementById("span3"),

    score_player1 = 0,
    score_player2 = 0,
    score_player3 = 0,
    score_player4 = 0,
    num_players = 2,

    jogo_ativo = true,
    adicionar_jogador = document.getElementById("adicionar_jogador");
remover_jogador = document.getElementById("remover_jogador");
reset = document.getElementById("reset");


const checaVitoria = function () {
    switch (valor_objetivo){
        case score_player1:
        placar_player1.classList.toggle("text-success");
        jogo_ativo = false;
        break;

        case score_player2:
        placar_player2.classList.toggle("text-success");
        jogo_ativo = false;
        break;

        case score_player3:
        placar_player3.classList.toggle("text-success");
        jogo_ativo = false;
        break;

        case score_player4:
        placar_player4.classList.toggle("text-success");
        jogo_ativo = false;
        break;
    }
}

const atualizarPlacarPlayer1 = function () {
    placar_player1.classList.remove("text-success");
    placar_player1.innerText = score_player1;
}

const atualizarPlacarPlayer2 = function () {
    placar_player2.classList.remove("text-success");
    placar_player2.innerText = score_player2;
}

const atualizarPlacarPlayer3 = function () {
    placar_player3.classList.remove("text-success");
    placar_player3.innerText = score_player3;
}

const atualizarPlacarPlayer4 = function () {
    placar_player4.classList.remove("text-success");
    placar_player4.innerText = score_player4;
}

form_botao.addEventListener("click", function () {
    if (jogo_ativo) {
        if (objetivo_form.value != "" && objetivo_form.value != 0) {
            valor_objetivo = objetivo_form.value;
            objetivo.innerText = valor_objetivo;
        }
    }
});

player1_botao.addEventListener("click", function () {
    if (jogo_ativo) {
        score_player1 += 1;
        atualizarPlacarPlayer1();
        checaVitoria();
    }
});

player2_botao.addEventListener("click", function () {
    if (jogo_ativo) {
        score_player2 += 1;
        atualizarPlacarPlayer2();
        checaVitoria();
    }
});

player3_botao.addEventListener("click", function () {
    if (jogo_ativo) {
        score_player3 += 1;
        atualizarPlacarPlayer3();
        checaVitoria();
    }
});

player4_botao.addEventListener("click", function () {
    if (jogo_ativo) {
        score_player4 += 1;
        atualizarPlacarPlayer4();
        checaVitoria();
    }
});

reset.addEventListener("click", function () {
    score_player1 = 0;
    score_player2 = 0;
    score_player3 = 0;
    score_player4 = 0;
    jogo_ativo = true;
    atualizarPlacarPlayer1();
    atualizarPlacarPlayer2();
    atualizarPlacarPlayer3();
    atualizarPlacarPlayer4();
});

adicionar_jogador.addEventListener("click", function () {
    switch (num_players) {
        case 2:
            player3_botao.classList.toggle("d-none");
            placar_player3.classList.toggle("d-none");
            num_players++;
            break;

        case 3:
            player4_botao.classList.toggle("d-none");
            placar_player4.classList.toggle("d-none");
            span3.classList.toggle("d-none");
            adicionar_jogador.classList.toggle("d-none");
            num_players++;
            break;
    }
});

remover_jogador.addEventListener("click", function () {
    switch (num_players) {
        case 4:
            player4_botao.classList.toggle("d-none");
            placar_player4.classList.toggle("d-none");
            adicionar_jogador.classList.toggle("d-none");
            span3.classList.toggle("d-none")
            num_players--;
            break;

        case 3:
            player3_botao.classList.toggle("d-none");
            placar_player3.classList.toggle("d-none")
            num_players--;
            break;
    }
});
