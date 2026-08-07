const gerar = document.getElementById("gerar");
const imprimir = document.getElementById("imprimir");
const limpar = document.getElementById("limpar");
const carnes = document.getElementById("carnes");

gerar.addEventListener("click", gerarCarne);
imprimir.addEventListener("click", () => window.print());
limpar.addEventListener("click", limparTudo);

function gerarCarne(){

    carnes.innerHTML = "";

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const procedimento = document.getElementById("procedimento").value;

    const valorTotal = Number(document.getElementById("valorTotal").value);
    const entrada = Number(document.getElementById("entrada").value);
    const parcelas = Number(document.getElementById("parcelas").value);

    const primeiro = document.getElementById("primeiroVencimento").value;

    if(
        !nome ||
        !procedimento ||
        !valorTotal ||
        !parcelas ||
        !primeiro
    ){
        alert("Preencha todos os campos.");
        return;
    }

    const saldo = valorTotal - entrada;
    const valorParcela = saldo / parcelas;

    let data = new Date(primeiro + "T12:00:00");

    for(let i=1;i<=parcelas;i++){

        let vencimento = data.toLocaleDateString("pt-BR");

        let carne = document.createElement("div");
        carne.className="carne";

        carne.innerHTML = `
        <div class="via">

            <div class="topoCarne">
                <img src="logo.png">
                <div>
                    <div class="nomeClinica">Clínica Odontológica</div>
                    <small>Via da Clínica</small>
                </div>
            </div>

            <div class="info"><b>Paciente:</b> ${nome}</div>
            <div class="info"><b>CPF:</b> ${cpf}</div>
            <div class="info"><b>Telefone:</b> ${telefone}</div>
            <div class="info"><b>Procedimento:</b> ${procedimento}</div>
            <div class="info"><b>Parcela:</b> ${i}/${parcelas}</div>
            <div class="info"><b>Vencimento:</b> ${vencimento}</div>
            <div class="info"><b>Valor:</b> R$ ${valorParcela.toFixed(2)}</div>

            <div class="assinatura">
                Assinatura da Clínica
            </div>

        </div>

        <div class="via">

            <div class="topoCarne">
                <img src="logo.png">
                <div>
                    <div class="nomeClinica">Clínica Odontológica</div>
                    <small>Via do Paciente</small>
                </div>
            </div>

            <div class="info"><b>Paciente:</b> ${nome}</div>
            <div class="info"><b>CPF:</b> ${cpf}</div>
            <div class="info"><b>Telefone:</b> ${telefone}</div>
            <div class="info"><b>Procedimento:</b> ${procedimento}</div>
            <div class="info"><b>Parcela:</b> ${i}/${parcelas}</div>
            <div class="info"><b>Vencimento:</b> ${vencimento}</div>
            <div class="info"><b>Valor:</b> R$ ${valorParcela.toFixed(2)}</div>

            <div class="assinatura">
                Assinatura do Paciente
            </div>

        </div>
        `;

        carnes.appendChild(carne);

        data.setMonth(data.getMonth()+1);

    }

}

function limparTudo(){

    document.querySelectorAll("input").forEach(campo=>{
        campo.value="";
    });

    document.getElementById("entrada").value=0;

    carnes.innerHTML="";

}