document.getElementById('formMedia').addEventListener('submit', function(event) {
    event.preventDefault();

    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const media = (num1 + num2) / 2;

    alert(`A média aritmética é: ${media}`);
});
