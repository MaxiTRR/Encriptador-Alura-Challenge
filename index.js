let textoAEncriptar = document.querySelector('textarea');
let textoDesencriptado = document.querySelector('.desencriptador');
let btnCopiar = document.querySelector('#btn-copiar');
let descImg = document.querySelector('#desc-img');
let descTitle = document.querySelector('#des-title');
let textShow = document.querySelector('#textShow');

btnCopiar.style.display = 'none';
const dicc = {
    'a':'ai',
    'e':'enter',
    'i':'imes',
    'o':'ober',
    'u':'ufat'
};

function encriptar(texto){
    let textoEncriptado = '';
    for(let i=0; i<texto.length;i++){
        let letter = texto[i];
        if(letter in dicc){
            textoEncriptado += dicc[letter];
        }else{
            textoEncriptado +=letter;
        }; 
    };
    return textoEncriptado;
};

function desencriptador(texto){
    let textoReverso = '';
    if(texto !== ''){
        textoReverso += texto.replaceAll('ai', 'a')
                         .replaceAll('enter', 'e')
                         .replaceAll('imes', 'i')
                         .replaceAll('ober', 'o')
                         .replaceAll('ufat', 'u')
        
    } else {
        descImg.style.display = 'block';
        descTitle.style.display = 'block';
    };
    return textoReverso;
};   

let buttonEnc = document.querySelector('#btn-encriptador');
buttonEnc.addEventListener('click',()=>{
    if(textoAEncriptar.value !== ''){
        textShow.innerText = encriptar(textoAEncriptar.value.toLowerCase());
        descImg.style.display = 'none';
        descTitle.style.display = 'none';
        btnCopiar.style.display = 'block';
    }else{
        descImg.style.display = 'block';
        descTitle.style.display = 'block';
        btnCopiar.style.display = 'none';
    }; 
});

let buttonDesc = document.querySelector('#btn-desencriptador');
buttonDesc.addEventListener('click',()=>{
    if(textoAEncriptar.value !== ''){
        textShow.innerText = desencriptador(textShow.innerText.toLowerCase());
    };
});

//Version deprecada de como copiar el texto en un boton.

// function copyTexto(htmlElement) {
//     let copyText = htmlElement.innerText
//     let inputElement = document.createElement('input');
//     inputElement.setAttribute('value', copyText);
//     document.body.appendChild(inputElement)
//     inputElement.select();
//     document.execCommand("copy");
//     inputElement.parentNode.removeChild(inputElement);
//   }
  
// btnCopiar.onclick = function(){
//     copyTexto(textShow)
// }

//Version actualizada de como copiar el texto en un boton
const copyContent = (htmlElement)=>{
    let text = htmlElement.innerText;
    navigator.clipboard.writeText(text);
    console.log('Texto copiado con exito:' + text)
}

btnCopiar.addEventListener('click', ()=>{
    copyContent(textShow);
});
