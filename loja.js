
var carrinhos = [];
var cervo;
var elefante;
var frango;
var tartaruga;
var girafa;
var kermit;
var ourico;
var ovelha;
var pinguim;
var ursoNatal;
var urso;
var hipopotamo;


function Produto(codigo, nome, preco, peso){
	this.codigo = codigo;
	//this.foto;
	this.nome = nome;
	//this.descricao;
	this.preco = preco;
	this.peso = peso;

	this.getNome = function(){
		return this.nome;
	}

	this.getCodigo = function(){
		return this.codigo;
	}

	this.getPreco = function(){
		return this.preco;
	}

	this.getPeso = function(){
		return this.peso;
	}

	/*this.getDescricao = function(){
		return this.descricao;
	}

	this.getFoto = function(){
		return this.foto;
	} */
}

function Carrinho(dono){
	this.dono = dono;
	this.produtos = [];
}

function Entrar(){
	var carrinho;
	var nome = document.getElementById('nomeLogin').value;
	var x = carrinhos.length;

	if(x > 0){
		for(var i = 0; i < x; i++){
			if(clientes[i].getNome() == nome){
				carrinho = carrinhos[i];
				carrinhos.splice(i, 1);
			}else{
				carrinho = new Carrinho(nome);
			}
		}
	}else{
		carrinho = new Carrinho(nome);
	}

	console.log(carrinho);
}

function listaDeProdutos(){
	cervo = new Produto(1, 'Cervo', 'R$ 39.90', 1);
	elefante = new Produto(2, 'Elefante', 'R$ 49.90', 2);
	frango = new Produto(3, 'Frango', 'R$ 29.90', 1);
	tartaruga = new Produto(4, 'Tartaruga', 'R$ 59.90', 1);
	girafa = new Produto(5, 'Girafa', 'R$ 59.90', 1);
	kermit = new Produto(6, 'Sapo Kermit', 'R$ 59.90', 1);
	ourico = new Produto(7, 'Ouriço', 'R$ 39.90', 1);
	ovelha = new Produto(8, 'Ovelha', 'R$ 49.90', 1);
	pinguim = new Produto(9, 'Pinguim', 'R$ 49.90', 1);
	ursoNatal = new Produto(11, 'Urso Natalino', 'R$ 29.90', 1);
	urso = new Produto(12, 'Urso Doentinho', 'R$ 29.90', 1);
	hipopotamo = new Produto(12, 'Hopopótamo', 'R$ 39.90', 2);

	console.log(cervo);

	document.getElementById("cervo-nome").innerHTML = cervo.getNome();
	//document.getElementById("cervo-preco").innerHTML = cervo.getPreco();
	//document.getElementById("elefante-nome").innerHTML = elefante.getNome();
	//document.getElementById("elefante-preco").innerHTML = elefante.getPreco();
	//document.getElementById('numberMatch').innerHTML;
	//document.getElementById('numberMatch').innerHTML;
	//document.getElementById('numberMatch').innerHTML;
	//document.getElementById('numberMatch').innerHTML;
	//document.getElementById('numberMatch').innerHTML;
	//document.getElementById('numberMatch').innerHTML;
	//document.getElementById('numberMatch').innerHTML;
	//document.getElementById('numberMatch').innerHTML;
	//document.getElementById('numberMatch').innerHTML;

}

function CalcularTotal(){

}

listaDeProdutos();