document.getElementById('formConversao').addEventListener('submit', function(event) {
    event.preventDefault();

    const cotacao = parseFloat(document.getElementById('cotacao').value);
    const valor = parseFloat(document.getElementById('valor').value);
    const resultado = cotacao * valor;

    document.getElementById('resultado').innerText = `O valor em reais é: R$ ${resultado.toFixed(2)}`;
});
