class NegociacaoController {

    constructor() {
        this._ordemAtual = '';
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacao = new Bind(
            new ListaNegociacao(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona','esvazia','ordena', 'inverteOrdem');

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto'
        );        
    }

    adiciona(event) {
        event.preventDefault();
        try {
            this._listaNegociacao.adiciona(this._criaNegociacao());
            this._mensagem.texto = "Negociação adicionada com sucesso.";
            this._limpaFormulario();
        } catch (erro) {
            this._mensagem.texto = erro;
        }
    }

    apaga() {
        this._listaNegociacao.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso.';
    }

    importarNegociacoes() {
        let service = new NegociacaoService();
        service.obterNegociacoes().then(negociacoes => {
            negociacoes.forEach(negociacao => {
                this._listaNegociacao.adiciona(negociacao);
                this._mensagem.texto = "Negociações importadas com sucesso";
            })
        }).catch(erro => {throw new Error(erro)})
    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value), 
            this._inputQuantidade.value, 
            this._inputValor.value
        );
    }

    ordena(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaNegociacao.inverteOrdem();
        } else {
            this._listaNegociacao.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }
}