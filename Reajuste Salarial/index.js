function calcularValores(){
    var salario = parseFloat(document.getElementById("salario").value);
    var abono = parseFloat(document.getElementById("abono").value);
    var cesta = parseFloat(document.getElementById("cesta").value);

    reajusteSalario(salario, abono, cesta);
}

function reajusteSalario(salario, abono, cesta) {
    var percentual = 0; // Definir o percentual no início da função

    if (salario <= 1400) {
        percentual = 0.1017;
    } else if (salario <= 1500) {
        percentual = 0.103;
    } else if (salario <= 1700) {
        percentual = 0.097;
    } else if (salario <= 1900) {
        percentual = 0.0954;
    } else if (salario <= 2105) {
        percentual = 0.0932;
    } else if (salario <= 2400) {
        percentual = 0.0911;
    } else if (salario <= 2700) {
        percentual = 0.0892;
    } else if (salario <= 3100) {
        percentual = 0.0871;
    } else if (salario <= 3500) {
        percentual = 0.0855;
    } else if (salario <= 4500) {
        percentual = 0.0837;
    } else if (salario <= 4900) {
        percentual = 0.0818;
    } else if (salario <= 5800) {
        percentual = 0.0802;
    } else if (salario >= 6000) {
        percentual = 0.0710;
    }

    var novoValor = novoSalario(percentual, salario) + abono + cesta;
    var percentualPorcentagem = (percentual * 100).toFixed(1);

    var mensagem = "1: Você obteve " + percentualPorcentagem + "%!!!" + "\nAbono: " + abono + "\nCesta: " + cesta + "\nNo total, seu novo salário é: R$" + novoValor.toFixed(2);
    alert(mensagem);
}

function novoSalario(percentual, salario) {
    return salario * (1 + percentual); 
}

document.getElementById("calcular").addEventListener("click", calcularValores);

window.addEventListener('load', () => {
    const container = document.getElementById("retangulo1");
    
    function animacao() {
        container.style.transition = 'opacity 0.5s, transform 0.5s';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }
    
    setTimeout(() => {
        requestAnimationFrame(animacao);
    }, 100);
});