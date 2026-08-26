// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Ferro"; 
    }

    return { saldoVitorias, nivel };
}

// Lista de teste com múltiplos jogadores
const listaJogadores = [
    { vitorias: 8, derrotas: 3 },
    { vitorias: 15, derrotas: 5 },
    { vitorias: 45, derrotas: 10 },
    { vitorias: 75, derrotas: 20 },
    { vitorias: 88, derrotas: 12 },
    { vitorias: 95, derrotas: 15 },
    { vitorias: 120, derrotas: 30 }
];

// Laço para iterar e exibir o resultado
for (let i = 0; i < listaJogadores.length; i++) {
    const jogador = listaJogadores[i];
    const resultado = calcularRank(jogador.vitorias, jogador.derrotas);
    
    console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
}
