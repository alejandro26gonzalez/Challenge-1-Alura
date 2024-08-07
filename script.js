const textoCopiado = document.querySelector(".presentacion__textoEntrada__textarea");
const textoInterno = document.getElementById('showTextEncrypted');
const botonCopy = document.getElementById('botonCopiar');
const aviso = document.querySelector(".presentacion__textoEntrada__aviso__text");



function botonEncriptar(){
    const textEncrypted = encriptarTexto(textoCopiado.value);
    textoInterno.innerHTML = textEncrypted;
    
}
function botonDesencriptar(){
    const textEncrypted = desencriptarTexto(textoCopiado.value);
    textoInterno.innerHTML = textEncrypted;
    
}

function encriptarTexto(textoEncriptado)
{
    textoEncriptado = textoEncriptado.toLowerCase();
    let data = [["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]];
    for (let i = 0; i < textoEncriptado.length; i++)
    {
        if (textoEncriptado.charCodeAt(i)>122 || textoEncriptado.charCodeAt(i)<97)
        {
            aviso.innerHTML = 'El texto escrito no debe contener caracteres especiales, no debe contener acentos y sin mayúsculas!!!';
            noMostrarTexto();
            return;
        }
    }
    for (let i = 0; i < data.length; i++) 
    {
        if(textoEncriptado.includes(data[i][0]))
        {
            textoEncriptado = textoEncriptado.replaceAll(data[i][0], data[i][1]);
        }
        mostrarTexto();
    }


    return textoEncriptado;
}
function desencriptarTexto(textoEncriptado)
{
    textoEncriptado = textoEncriptado.toLowerCase();
    let data = [["enter","e"],["imes","i"],["ai", "a"],["ober","o"],["ufat","u"]];
    
    for (let i = 0; i < data.length; i++) 
    {
        if(textoEncriptado.includes(data[i][0]))
        {
            textoEncriptado = textoEncriptado.replaceAll(data[i][0], data[i][1]);
        }
        mostrarTexto();
    }
    return textoEncriptado;
}

function copiarTexto(){
    navigator.clipboard.writeText(textoInterno.innerText);
    botonCopy.innerHTML = 'Copiado';
    botonCopy.style.backgroundColor = '#0A3871';
    botonCopy.style.color = 'White';
}

function mostrarTexto()
{
    document.getElementById('pictureCopy').style.display = 'none';
    document.getElementById('lateral__derecho__text').style.display = 'none';
    document.getElementById('botonCopiar').style.visibility = 'visible';
    document.getElementById('botonCopiar').innerHTML = 'Copiar';
    document.getElementById('botonCopiar').style.backgroundColor = 'white';
    document.getElementById('botonCopiar').style.color = '#0A3871';
    document.querySelector('.showText').style.visibility = 'visible';
}
function noMostrarTexto(){
    document.getElementById('pictureCopy').style.display = 'block';
    document.getElementById('lateral__derecho__text').style.display = 'block';
    document.getElementById('botonCopiar').style.visibility = 'hidden';
    document.querySelector('.showText').style.visibility = 'hidden';
};

