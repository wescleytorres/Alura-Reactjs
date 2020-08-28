import { Conta } from "../Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor(saldoinicial, cliente, agencia) {
        super(saldoinicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // esta sobreescrevendo o comportamento de sacar
    sacar(valor) {
        let taxa = 1.1
        return this._sacar(valor, taxa);
    };
    
}
