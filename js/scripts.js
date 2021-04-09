function mensaje() {
    var nombre = document.getElementById('txtNombre').value;
    alert('Yo Soy :' + nombre);
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
        suma = suma + ( carac * num );
        num=num-1;
        if (num == 1) {
            num = 7;
        }
    }
    // alert(' Total: '+suma);
    var resto = suma % 11;
    var dv = 11 - resto;
    
    if ( dv > 9) {
        if ( dv == 10 ) {
            dv ='K';
        }else{
            dv=0;
        }
    }
    alert('DV:'+dv);
    
}