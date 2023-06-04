

function getUploadFiles(){
         
  let s =document.getElementById('uploadInputId');


let fileList = s.files;
const fileListArr=Array.from(fileList);

 

for(let file of fileListArr){


let fileLi = document.createElement('li');
fileLi.textContent= file.name;

const ol = document.querySelector('#fileslist')
ol.appendChild(fileLi);
document.querySelector('#fileuploadResult').appendChild=ol;
};
}