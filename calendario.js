function funcionDiaSemana(){
    let dia, mes, anio;
    dia = document.getElementById("dia").value;
    mes = document.getElementById("mes").value; 
    anio = document.getElementById("anio").value;
    let semana=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let fecha = new Date(mes+' '+dia+', '+anio)
    let diaNoLaborable = semana[fecha.getDay()];
    switch (diaNoLaborable) {
        case 'Domingo':
        case 'Sabado':
        document.getElementById('diaSemana').value = semana[fecha.getDay()] + ", dia no laborable" ;
            break;
        default:
        document.getElementById('diaSemana').value = semana[fecha.getDay()] + ", dia laborable" ;
            break;
    }
}