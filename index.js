let textoAEncriptar = document.querySelector('input');
let textoDesencriptado = document.querySelector('.desencriptador');
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
    }
    return textoReverso;
}   

let buttonEnc = document.querySelector('#btn-encriptador');
buttonEnc.addEventListener('click',()=>{
    textoDesencriptado.innerText = encriptar(textoAEncriptar.value);
    ;
});

let buttonDesc = document.querySelector('#btn-desencriptador');
buttonDesc.addEventListener('click',()=>{
    textoDesencriptado.innerText = desencriptador(textoAEncriptar.value);
    console.log('Se tiene que ver esto')
});
