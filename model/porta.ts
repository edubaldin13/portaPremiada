export default class PortaModel{
    #numero : number;
    #temPresentes : boolean;
    #selecionada : boolean;
    #aberta : boolean;
    constructor(numero : number, temPresentes = false, selecionada = false, aberta = false) {
        this.#numero = numero;
        this.#temPresentes = temPresentes;
        this.#selecionada = selecionada;
        this.#aberta = aberta
    }
    get numero(){return this.#numero}
    get temPresentes(){return this.#temPresentes}
    get selecionada(){return this.#selecionada}
    get aberta(){return this.#aberta}
    get fechada(){return !this.#aberta}
    desselecionar(){
        const selecionada = false;
        return new PortaModel(this.numero, this.temPresentes, selecionada, this.aberta)
    }

    alternarSelecao(){
        const selecionada = !this.selecionada
        return new PortaModel(this.numero, this.temPresentes, selecionada, this.aberta)
    }

    abrir(){
        const aberta = true
        return new PortaModel(this.numero, this.temPresentes, this.selecionada, aberta)
    }
}