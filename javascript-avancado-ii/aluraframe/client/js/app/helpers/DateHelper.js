class DateHelper {
    constructor() {
        throw new Error('Essa classe não pode ser instanciada');
    }

    static dataParaTexto(data) {
        return data.getDate() 
        + '/' + (data.getMonth() + 1) 
        + '/' + data.getFullYear(); 
    }

    static textoParaData(texto) {

        if(!/\d{2}\/\d{2}\/\d{4}/.test(texto)) {
            throw new Error('Deve ser no formato dd/mm/yyyy');
        }

        return new Date(...
            texto.
            split('/')
            .reverse()
            .map((item, index) => item - index % 2)
        );
    }
}