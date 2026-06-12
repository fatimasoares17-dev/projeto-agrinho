// Aguarda o DOM (HTML) carregar completamente antes de executar
document.addEventListener('DOMcontentLoaded', () => {

    // Selesiona o botão pelo ID único
    const botaoInterativo = document.querySelector('#btnInterativo');

    // Verifica e o botão existena página para evitar errosno console
    if (botaoInterativo) {

        // Adiciona um "ecutador de eventos" para o clique
        botaoInterativo.addEventListener('click', () => {
            exibirMensagemSucesso();
          
