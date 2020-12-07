var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault();

    var body = document.querySelector('table tbody');
    var tr = document.createElement('tr');
    campos.forEach(campo => {
        var td =document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td)
    })

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);
    
    body.appendChild(tr);

    campos[0].value = '';
    campos[1].value = 1;
    campos[2].value = 0;

    campos[0].focus();
});