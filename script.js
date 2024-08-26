// Selección de elementos del DOM
const botonEncriptar = document.querySelector(".btn-encriptar");
const botonDesencriptar = document.querySelector(".btn-desencriptar");
const munieco = document.querySelector(".contenedormunieco");
const contenedor = document.querySelector(".contenedor-parrafo");
const resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar"); 

// Mapeos para encriptar y desencriptar
const mapEncriptacion = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const mapDesencriptacion = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
};

// Asignación de eventos
botonEncriptar.onclick = () => procesarTexto('encriptar');
botonDesencriptar.onclick = () => procesarTexto('desencriptar');
btnCopiar.addEventListener("click", copiarTexto);

// Función para procesar el texto (encriptar o desencriptar)
function procesarTexto(tipo) {
    ocultarAdelante();
    const texto = recuperarTexto();
    resultado.textContent = tipo === 'encriptar' ? transformarTexto(texto, mapEncriptacion) : transformarTexto(texto, mapDesencriptacion);
}

// Función para transformar el texto basado en el mapeo dado
function transformarTexto(texto, map) {
    if (map === mapEncriptacion) {
        return texto.split('').map(char => map[char] || char).join('');
    } else {
        let textoTransformado = texto;
        for (const [key, value] of Object.entries(map)) {
            textoTransformado = textoTransformado.split(key).join(value);
        }
        return textoTransformado;
    }
}

// Función para ocultar elementos
function ocultarAdelante() {
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

// Función para recuperar el texto de entrada
function recuperarTexto() {
    return document.querySelector(".cajatexto").value;
}

// Función para copiar el texto resultado
function copiarTexto() {
    const contenido = resultado.textContent;
    navigator.clipboard.writeText(contenido);
}
