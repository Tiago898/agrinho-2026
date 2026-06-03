// Função para simular o impacto sustentável das escolhas agrícolas
function simularImpacto(pratica) {
    const resultadoDiv = document.getElementById('resultado-simulador');
    let mensagem = "";

    switch(pratica) {
        case 'tecnologia':
            mensagem = "<strong>🛸 Impacto dos Drones:</strong> Redução de até 30% no uso de defensivos agrícolas devido à aplicação cirúrgica e precisa nas áreas afetadas.";
            break;
        case 'agua':
            mensagem = "<strong>💧 Impacto do Reuso:</strong> Economia de milhares de litros de água por hectare através de sistemas modernos de gotejamento subterrâneo e captação da chuva.";
            break;
        case 'solar':
            mensagem = "<strong>☀️ Impacto da Energia Solar:</strong> Redução drástica na pegada de carbono da fazenda e autossuficiência energética para bombear água e iluminar estruturas.";
            break;
        default:
            mensagem = "Selecione uma prática para calcular o impacto ambiental.";
    }

    // Altera o conteúdo na tela e adiciona um efeito de destaque dinâmico
    resultadoDiv.innerHTML = mensagem;
    resultadoDiv.style.backgroundColor = "#e9f5ed";
    resultadoDiv.style.borderColor = "#52b788";
}