window.addEventListener('load', function (event) {
    /* creamos variables */
    $('#cifrar1').click(function (ingresaPalabra) {
        event.preventDefault();
        do {
            ingresaPalabra = $('#cifrar').val();

            var cifrado = ''; //Haciendo una variable de tipo string vacía

            if (/^[a-zA-Z]*$/.test(ingresaPalabra)) { // Metodo test() revisa si la palabra cumple con la expresion regular y en tal caso retorna true

                for (var i = 0; i < ingresaPalabra.length; i++) { //Con un for recorremos toda la palabra ingresada

                    var aCifrar = ingresaPalabra[i]; // Creamos una variable que identifique el carácter a cifrar

                    if (aCifrar.match(/[a-z]/i)) { // Comprobamos que sea una letra

                        var toAscci = ingresaPalabra.charCodeAt(i); //Y buscamos el número Ascci de esa letra

                        if ((toAscci >= 65) && (toAscci <= 90)) // Si son mayúsculas ocupamos:
                            aCifrar = String.fromCharCode(((toAscci - 65 + 33) % 26) + 65);

                        else if ((toAscci >= 97) && (toAscci <= 122)) // Si son minúsculas ocupamos:
                            aCifrar = String.fromCharCode(((toAscci - 97 + 33) % 26) + 97);
                    }
                    cifrado += aCifrar; // Creamos la nueva cadena
                }
                var container = document.getElementById("text");
                var t = document.createElement('li');
                var li = document.createTextNode(cifrado);
                t.appendChild(li);
                container.appendChild(t);// Retornamos un elemento li con el mensaje encriptado
            } else {
                document.write('Ingresa un Texto Válido');
            }

        } while (ingresaPalabra == "" || /^[a-zA-Z]*$/.test(ingresaPalabra) === false); // 


    })


    $('#descifrar1').click(function (ingresaPalabra) {
        event.preventDefault();
        do {
            ingresaPalabra = $('#descifrar').val();

            var descifrado = ''; //Haciendo una variable de tipo string vacía

            if (/^[a-zA-Z]*$/.test(ingresaPalabra)) { // Metodo test() revisa si la palabra cumple con la expresion regula y en tal caso retorna true

                for (var i = 0; i < ingresaPalabra.length; i++) { //Con un for recorremos toda la palabra ingresada

                    var aDescifrar = ingresaPalabra[i]; // Creamos una variable que identifique el caracter a descifrar

                    if (aDescifrar.match(/[a-z]/i)) { // Comprobamos que sea una letra

                        var toAscci = ingresaPalabra.charCodeAt(i); //Y buscamos el número Ascci de esa letra

                        if ((toAscci >= 65) && (toAscci <= 90)) // Si son mayúsculas ocupamos:
                            aDescifrar = String.fromCharCode(((toAscci - 65 - 7 + 52) % 26) + 65);

                        else if ((toAscci >= 97) && (toAscci <= 122)) // Si son minúsculas ocupamos:
                            aDescifrar = String.fromCharCode(((toAscci - 97 - 7 + 52) % 26) + 97);
                    }
                    descifrado += aDescifrar; // Creamos la nueva cadena
                }
                var container = document.getElementById("text1");
                var t = document.createElement('li');
                var li = document.createTextNode(descifrado);
                t.appendChild(li);
                container.appendChild(t);// Retornamos un elemento li con el mensaje desencriptado
            } else {
                document.write('Ingresa un Texto Válido');
            }
        } while (ingresaPalabra == "" || /^[a-zA-Z]*$/.test(ingresaPalabra) === false);

      
    })

})






































/*
var cifrar = function(ingresaPalabra) {
    do {
        ingresaPalabra = document.getElementById('cifrar').value();

        var cifrado = ''; //Haciendo una variable de tipo string vacía

        if (/^[a-zA-Z]*$/.test(ingresaPalabra)) { // Metodo test() revisa si la palabra cumple con la expresion regular y en tal caso retorna true

            for (var i = 0; i < ingresaPalabra.length; i++) { //Con un for recorremos toda la palabra ingresada

                var aCifrar = ingresaPalabra[i]; // Creamos una variable que identifique el carácter a cifrar

                if (aCifrar.match(/[a-z]/i)) { // Comprobamos que sea una letra

                    var toAscci = ingresaPalabra.charCodeAt(i); //Y buscamos el número Ascci de esa letra

                    if ((toAscci >= 65) && (toAscci <= 90)) // Si son mayúsculas ocupamos:
                        aCifrar = String.fromCharCode(((toAscci - 65 + 33) % 26) + 65);

                    else if ((toAscci >= 97) && (toAscci <= 122)) // Si son minúsculas ocupamos:
                        aCifrar = String.fromCharCode(((toAscci - 97 + 33) % 26) + 97);
                }
                cifrado += aCifrar; // Creamos la nueva cadena
            }
           document.write(cifrado); // Retornamos un alert con el mensaje encriptado
        } else {
            alert('Ingresa un Texto Válido');
        }

    } while (ingresaPalabra == "" || /^[a-zA-Z]*$/.test(ingresaPalabra) === false); // 

};

var descifrar = function(ingresaPalabra) {
    do {
        ingresaPalabra = prompt("Ingresa la palabra que quieres descifrar:");

        var descifrado = ''; //Haciendo una variable de tipo string vacía

        if (/^[a-zA-Z]*$/.test(ingresaPalabra)) { // Metodo test() revisa si la palabra cumple con la expresion regula y en tal caso retorna true

            for (var i = 0; i < ingresaPalabra.length; i++) { //Con un for recorremos toda la palabra ingresada

                var aDescifrar = ingresaPalabra[i]; // Creamos una variable que identifique el caracter a descifrar

                if (aDescifrar.match(/[a-z]/i)) { // Comprobamos que sea una letra

                    var toAscci = ingresaPalabra.charCodeAt(i); //Y buscamos el número Ascci de esa letra

                    if ((toAscci >= 65) && (toAscci <= 90)) // Si son mayúsculas ocupamos:
                        aDescifrar = String.fromCharCode(((toAscci - 65 - 7 + 52) % 26) + 65);

                    else if ((toAscci >= 97) && (toAscci <= 122)) // Si son minúsculas ocupamos:
                        aDescifrar = String.fromCharCode(((toAscci - 97 - 7 + 52) % 26) + 97);
                }
                descifrado += aDescifrar; // Creamos la nueva cadena
            }
            return alert(descifrado); // Retornamos un alert con el mensaje desencriptado
        } else {
            alert('Ingresa un Texto Válido');
        }
    } while (ingresaPalabra == "" || /^[a-zA-Z]*$/.test(ingresaPalabra) === false);

}*/