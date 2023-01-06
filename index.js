let textoAEncriptar = document.querySelector('input');
let textoDesencriptado = document.querySelector('.desencriptador');
let btnCopiar = document.querySelector('#btn-copiar');
let descImg = document.querySelector('#desc-img');
let descTitle = document.querySelector('#des-title');
let textShow = document.querySelector('#textShow');

btnCopiar.style.display = 'none';
const dicc = {
    'a':'enter',
    'e':'jojo',
    'i':'poco',
    'o':'kara',
    'u':'kura'
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
    console.log(textoEncriptado);
    return textoEncriptado;
    //let resultado = textoAEncriptar.value;
};

function desencriptador(texto){
    let textoReverso = '';
    if(texto !== ''){
        textoReverso += texto.replaceAll('enter', 'a')
                         .replaceAll('jojo', 'e')
                         .replaceAll('poco', 'i')
                         .replaceAll('kara', 'o')
                         .replaceAll('kura', 'u')
        
    } else {
        descImg.style.display = 'block';
        descTitle.style.display = 'block';
    }
    return textoReverso;
}   

let buttonEnc = document.querySelector('#btn-encriptador');
buttonEnc.addEventListener('click',()=>{
    if(textoAEncriptar.value !== ''){
        textShow.innerText = encriptar(textoAEncriptar.value);
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
        textShow.innerText = desencriptador(textShow.innerText);
    //console.log(textoAEncriptar.value)
    };
});

function copyTexto(htmlElement) {
    let copyText = htmlElement.innerText
    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', copyText);
    document.body.appendChild(inputElement)
    inputElement.select();
    document.execCommand("copy");
    inputElement.style.display = 'none';
  }
  
btnCopiar.onclick = function(){
    copyTexto(textShow)
}
