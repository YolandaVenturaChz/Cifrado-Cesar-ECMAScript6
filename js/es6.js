window.addEventListener('load', function() {
    /* creamos variables */
      $('#cifrar1').click(function(ingresaPalabra) {
        event.preventDefault();
        do {
          ingresaPalabra = $('#cifrar').val();
          var cifrado = ''; // Haciendo una variable de tipo string vacía
          if (/^[a-zA-Z]*$/.test(ingresaPalabra)) { // Metodo test() revisa si la palabra cumple con la expresion regular y en tal caso retorna true
            for (let i = 0; i < ingresaPalabra.length; i++) { // Con un for recorremos toda la palabra ingresada
              let aCifrar = ingresaPalabra[i]; // Creamos una variable que identifique el carácter a cifrar
              if (aCifrar.match(/[a-z]/i)) { // Comprobamos que sea una letra
                let toAscci = ingresaPalabra.charCodeAt(i); // Y buscamos el número Ascci de esa letra
                if ((toAscci >= 65) && (toAscci <= 90)) // Si son mayúsculas ocupamos:
                  aCifrar = String.fromCharCode(((toAscci - 65 + 33) % 26) + 65);
                else if ((toAscci >= 97) && (toAscci <= 122)) // Si son minúsculas ocupamos:
                  aCifrar = String.fromCharCode(((toAscci - 97 + 33) % 26) + 97);
              }
              cifrado += aCifrar; // Creamos la nueva cadena
            }
            const container = document.getElementById('text');
            const t = document.createElement('li');
            let li = document.createTextNode(cifrado);
            t.appendChild(li);
            container.appendChild(t);
          } else {
            document.write('Ingresa un Texto Válido');
          }
        } while (ingresaPalabra === '' || /^[a-zA-Z]*$/.test(ingresaPalabra) === false);
      });
    
      $('#descifrar1').click(function(ingresaPalabra) {
        event.preventDefault();
        do {
          ingresaPalabra = $('#descifrar').val();
          var descifrado = ''; // Haciendo una variable de tipo string vacía
          if (/^[a-zA-Z]*$/.test(ingresaPalabra)) { // Metodo test() revisa si la palabra cumple con la expresion regula y en tal caso retorna true
            for (let i = 0; i < ingresaPalabra.length; i++) { // Con un for recorremos toda la palabra ingresada
              let aDescifrar = ingresaPalabra[i]; // Creamos una variable que identifique el caracter a descifrar
              if (aDescifrar.match(/[a-z]/i)) { // Comprobamos que sea una letra
                let toAscci = ingresaPalabra.charCodeAt(i); // Y buscamos el número Ascci de esa letra
                if ((toAscci >= 65) && (toAscci <= 90)) // Si son mayúsculas ocupamos:
                  aDescifrar = String.fromCharCode(((toAscci - 65 - 7 + 52) % 26) + 65);
                else if ((toAscci >= 97) && (toAscci <= 122)) // Si son minúsculas ocupamos:
                  aDescifrar = String.fromCharCode(((toAscci - 97 - 7 + 52) % 26) + 97);
              }
              descifrado += aDescifrar; // Creamos la nueva cadena
            }
            const container = document.getElementById('text1');
            const t = document.createElement('li');
            let li = document.createTextNode(descifrado);
            t.appendChild(li);
            container.appendChild(t);// Retornamos un elemento li con el mensaje desencriptado
          } else {
            document.write('Ingresa un Texto Válido');
          }
        } while (ingresaPalabra === '' || /^[a-zA-Z]*$/.test(ingresaPalabra) === false);
      });
    });
    
    