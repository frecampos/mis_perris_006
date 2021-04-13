function mensaje() {
    var nombre = document.getElementById('txtNombre').value;
    alert('Yo Soy :' + nombre);
}

function validarForm() {
    var resp = validarut();
    if (resp==false) {
        return false;
    }
    resp = validaFecha();
    if (resp==false) {
        return false;
    }
}

////////////////////////////// funciones de validacion
function validaFecha() {
    var fechaUsuario= document.getElementById('txtFechaNaci').value;
    console.log('Fecha Usuario:'+fechaUsuario);
    var fechaSistema = new Date();
    console.log('Fecha Sistema:'+fechaSistema);
    ///////////////////////////////////////////////
    var ano = fechaUsuario.slice(0,4);
    var mes = fechaUsuario.slice(5,7);
    var dia = fechaUsuario.slice(8,10);
    console.log('Año:'+ano+' Mes:'+mes+' Dia:'+dia);
    ///////////////////////////////////////////////
    var fechaNuevaUsuario = new Date(ano,(mes-1),dia);
    console.log('Nueva Fecha Usuario:'+fechaNuevaUsuario);
    if (fechaNuevaUsuario >= fechaSistema) {
        alert('Fecha incorrecta');
        return false;
    }
    ///////////////////////////////////////////////////
    var unDia = 24 * 60 * 60 * 1000;//cuantos milisegundos es un dia
    var diferencia_dias =Math.trunc( ( fechaSistema.getTime() - fechaNuevaUsuario.getTime() ) / unDia);
    console.log('Dias:'+diferencia_dias);
    var anos =Math.trunc( diferencia_dias / 365 );
    console.log('Años:'+anos);
    if (anos<18) {
        alert('es menor de edad, usted tiene '+anos+ ' años de edad');
        return false;
    }
    return true;
}
function validarut() {
    var rut = document.getElementById('txtRut').value;
    if ( rut.length !=10 ) {
        alert('largo del rut incorrecto');
        return false;
    }
    var suma = 0;
    var num = 3;
    for (let index = 0; index < 8; index++) {
        var carac= rut.slice(index,index+1);
        //alert(carac + ' x '+ num);
        console.log(carac + ' x '+ num);
        suma = suma + ( carac * num );
        num=num-1;
        if (num == 1) {
            num = 7;
        }
    }
    // alert(' Total: '+suma);
    console.log(' Total: '+suma);
    var resto = suma % 11;
    var dv = 11 - resto;
    
    if ( dv > 9) {
        if ( dv == 10 ) {
            dv ='K';
        }else{
            dv=0;
        }
    }
    console.log('DV:'+dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if (dv != dv_usuario) {
        alert('Rut incorrecto');
        return false;
    }
    return true;
}