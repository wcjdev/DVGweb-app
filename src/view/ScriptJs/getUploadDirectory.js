


function getUploadDirectory(){

    let dirList = document.querySelector("#dirInputId");
    

    let fileLi = document.getElementById('directorylist');

    const fileList = dirList.files;
    const fileListArr = Array.from(fileList);
   
        
        for(let file of fileListArr){

            const liEle = document.createElement('li');
            liEle.textContent = file.name;
            
            fileLi.appendChild(liEle);
           
        }
    }

