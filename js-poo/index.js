import {Cliente} from "./Conta/Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const gerente = new Gerente("Rodrigo", 10000, 11122233344);
const diretor = new Diretor("Ricardo", 5000, 44455566678);

const cliente = new Cliente("Lais", 55566677789, 4569);

gerente.cadastrarSenha(1234567);
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 123456789);

diretor.cadastrarSenha(123);
const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123);


const clienteEstaLogado = SistemaAutenticacao.login(cliente, 456)

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
