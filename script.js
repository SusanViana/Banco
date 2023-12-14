
var nome = prompt("Qual é o seu nome?");
alert("Ola " + nome + " é um prazer ter você por aqui!")
var saldo = 8539.53; //Variavel Global
var senha = 3589;

function inicio() {
	//ESCOPO
	//Variavel Local
	var escolha = parseInt(prompt('Selecione uma opção \n1.) Saldo\n2.) Ver extrato \n3.) Saque \n4.) Depósito \n5.) Fazer transferência \n6.) Sair\n'));

	switch (escolha) {
		case 1:
			coloque_sua_senha();
			ver_saldo();
			break;

		case 2:
			coloque_sua_senha();
			ver_extrato();
			break;

		case 3:
			coloque_sua_senha();
			fazer_saque();
			break

		case 4:
			coloque_sua_senha();
			fazer_deposito();
			break

		case 5:
			coloque_sua_senha();
			fazer_transferência();
			break

		case 6:
			sair();
			break

		default:
			erro();
	}
}

function ver_saldo() {
	alert('Seu saldo atual é: ' + saldo);
	inicio();
}

function fazer_deposito() {
	var deposito = parseFloat(prompt('Qual o valor para depósito?'));

	// Not a Number --> Isso é um não-número?
	if (isNaN(deposito) || deposito === '') {
		alert('Por favor, informe um número.');
		fazer_deposito();
	} else if (deposito <= 0 || saldo < deposito) {
		alert("Operação não autorizada ")
	}
	else {
		saldo += deposito;
		//saldo = saldo + deposito;
		ver_saldo();
		inicio()
	}
}

function fazer_saque() {
	var saque = parseFloat(prompt('Qual o valor para saque?'));

	if (isNaN(saque) || saque === '') {
		alert('Por favor, informe um número.');
		fazer_saque();
	}
	else if (saldo < saque || saque <= 0) {
		alert("Operação não autorizada");
		fazer_saque();
	}
	else {
		saldo -= saque;
		//saldo = saldo - saque;
		ver_saldo();
		inicio()
	}
}
function ver_extrato() {
	alert(
		"   16/09 padaria menininha  R$19,99\n   16/09 Sacolão menino R$25,50\n   17/09 Pet shop poico feliz R$ 75,90"
	)
	inicio()
}

function fazer_transferência() {
	var valor = prompt("Informe um valor para transferencia")
	var conta = parseInt(prompt("Informe o numero de uma conta"));
	if (isNaN(conta) || saldo < valor) {
		alert("Operação invalida ")
	} else if (saldo >= valor) {
		alert("Operação concluido com sucesso ")
		saldo()
		inicio()
	}
}

function erro() {
	alert('Por favor, informe um número entre 1 e 6.');
	inicio();
}

function sair() {
	var confirma = confirm('Você deseja sair?');
	if (confirma) {
		alert(nome + ", foi um prazer ter você por aqui!")
		window.close();
	} else {
		inicio();
	}
}

function coloque_sua_senha() {
	var informe_sua_senha = prompt("Informe sua senha ");
	if (senha == informe_sua_senha) {
		alert("senha correta ")
	}
	else if (senha != informe_sua_senha) {
		coloque_sua_senha()
	}

}

inicio()
