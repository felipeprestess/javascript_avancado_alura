class ListaNegociacao {
    constructor() {
        this._listaNegociacao = [];
    }

    ordena(criterio) {
        this._listaNegociacao.sort(criterio);
    }

    inverteOrdem() {
        this._listaNegociacao.reverse();
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

    get volumeTotal() {
        return this._listaNegociacao.reduce((total, n) => total + n.volume, 0.0);
    }
}