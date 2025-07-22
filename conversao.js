document.getElementById('formConversao').addEventListener('submit', function(event) {
    event.preventDefault();

    const cotacao = parseFloat(document.getElementById('cotacao').value);
    const valor = parseFloat(document.getElementById('valor').value);
    const resultado = cotacao * valor;

    alert(`A cotação do Dólar é: ${cotacao * valor}`);
});
