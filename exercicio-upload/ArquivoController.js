class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        let campos = this._inputDados.value.split('/').map(item => item.toUpperCase());
        const arquivo = new Arquivo(...campos);
        this._limpaFormulario();
        console.log(
          `Formato: ${arquivo.nome}
           Tamanho: ${arquivo.tamanho}
           Tipo: ${arquivo.tipo}`
        );
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}