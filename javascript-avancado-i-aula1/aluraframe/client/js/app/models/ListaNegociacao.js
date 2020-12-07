class ListaNegociacao {
    constructor() {
        this._listaNegociacao = [];
    }

    adiciona(negociacao) {
        this._listaNegociacao.push(negociacao);
    }

    esvazia() {
        this._listaNegociacao = [];
    }

    get negociacoes() {
        return [].concat(this._listaNegociacao);
    }
}