// Classe abstrata: feita para ser Herdada, não deve ser instanciada.
export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta!")
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;   
        
    }

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            return this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }


    get saldo() {
        return this._saldo;
    }
    
    //metodo abstrato
    sacar(valor) {
        throw new Error("O metodo sacar da Conta é abstrato!")
    };
    
    _sacar(valor, taxa) {        
        const valorSacado = taxa * valor;   
    
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;    
        }
    }

    depositar(valor) {

        if (valor <= 0) {
            return;
        }
        
        this._saldo += valor;
    };

    transferir(valor, conta) {
        const valorsacado = this.sacar(valor);
        conta.depositar(valorsacado);
    }

}