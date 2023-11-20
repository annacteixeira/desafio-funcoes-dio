const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSaldoENivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) nivel = 'Ferro';
    else if (vitorias <= 20) nivel = 'Bronze';
    else if (vitorias <= 50) nivel = 'Prata';
    else if (vitorias <= 80) nivel = 'Ouro';
    else if (vitorias <= 90) nivel = 'Diamante';
    else if (vitorias <= 100) nivel = 'Lendário';
    else nivel = 'Imortal';

    console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

function obterEntradaUsuario() {
    rl.question('Deseja calcular o saldo e nível de rankeadas? (s/n): ', (resposta) => {
        if (resposta.toLowerCase() === 's') {
            rl.question('Digite a quantidade de vitórias: ', (vitorias) => {
                rl.question('Digite a quantidade de derrotas: ', (derrotas) => {
                    calcularSaldoENivel(parseInt(vitorias), parseInt(derrotas));
                    obterEntradaUsuario();
                });
            });
        } else {
            rl.close();
        }
    });
}

obterEntradaUsuario();
