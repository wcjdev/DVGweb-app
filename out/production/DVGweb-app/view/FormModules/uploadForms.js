import { setFormEvent, getUploadFiles } from "./fileDataMaint";

// upload form
export function getUploadFiles(){
          
 
  
  

    const fileList = onchange.inp.files;
  
  
   for(let i=0; i<fileList.length; i++){
  
      console.log(fileList[i].name);
      alert(fileList[i].name);
      
    document.querySelector('#output').appendChild(fileList[i].name);
  };
};

export function fileUploadFormTemplate(){
  
  const formInnerHTML = `
    <div class="styleform">
      <form action="" id="artform" name="artform">
        <fieldset>
          <legend class="clear"><h3>Artist Profile:</h3></legend>

          <label class="clear" for="artistName">Artist Name:</label>
          <input class="clear" type="text" id="artistName" name="artist-name"/>

          <label class="clear" for="kindof">Art Media?</label>
            <select name="genre" class="clear" id="kindof" form="kindofForm">
            <option class="clear">Art Style</option>
            <option class="clear" value="Vectors">Vectors</option>
            <option class="clear" value="Comic">Comic</option>
            <option class="clear" value="Realism">Realism</option>

            <option class="clear" value="NFTs">NFTs</option>
            <option class="clear" value="Anime">Anime</option>
            <option class="clear" value="Other">Media</option>
          </select>
          <input type="select"
          <label for="selected">Select Files</label>
          <input type="file" id="selected" name="upload" />
        </fieldset>
      </form>
    </div>
  `;
  const newFormSel = (document.createElement("form").innerText = formInnerHTML)
  return newFormSel};

  // Drag Drop Select Files Upload Form
  
  export function fileDragSelectUpload(){

  const formInnerHTML =   `

    <!-- input and upload form  -->
<div class=" formdiv" id="fileUploadTemplate">

  <form name="selectFormName" id="selectFileId">

    <fieldset name="selectFieldSetName">
      <legend class="clear" name="selectLegName">Select Image Files</legend>
    </br>
      <label for="drapanddropId"></label>

      <p class="formdiv"  id="draganddropId" name="dropArea" style="outline: darkgray 1px  dashed; width:auto; height:60px; background-color: rgba(0, 51, 0, 0.178);"></br>png/jpeg/svg/json
        
      </p>
      
      <label class="clear hidden" for="uploadInputId"></br>or:</label>
      <input id="uploadInputId" type="file"  multiple onchange="getUploadFiles()">
    </br>

      <label class="clear hidden" for="fileNum"></br>Selected Files:</label>
      <output id="fileNames">0</output>

  
     <div class="clear hidden">
     </br>
      <button name="buttonSelect" type="button" id="fileSelectBtn" onclick="isSelectFiles()" >Upload</button>
     </div>
    </br>
  </fieldset>
  
      </form>
      <!-- use FileList to access uploads from form -->
</div>
    
    `

    const newForm = document.createElement('form').innerText=(formInnerHTML);
       
    return newForm;
  };
    




function newDropFormTemplate() {
    const formInnerHTML = ` 
  
    <div class="styleform">
  
      <form action="" id="user" name="user-form" method="post" >
      <fieldset>
      <legend class="clear"><h3>Collection Owner:</h3></legend>
      
      <label class="clear" for="title">Title:</label>
      <input class="clear" type="text" id="title" name="owner-name">
      <label class="clear" for="artist">Artist:</label>
      <input class="clear" type="text" id="artist" name="last-name">
      
      <label class="clear" for="lotnum">Lot number:</label>
      <input class="clear" type="text" id="lotnum" name="owner-phone">
      
      <label class="clear" for="emailid">Email:<span>&ensp;</span></label>
      <input class="clear" type="email" id="emailid" name="owner-email">
      
      <label class="clear" for="fqd">Path, Base otions</label>
      <input class="clear" type="text" id="fqd" name="attr" value="value">
      <label class="clear" for="kindof">Art Media?</label>
      <select name="genre" class="clear" id="kindof" form="kindofForm">
      <option class="clear">Art Style</option>
      <option class="clear" value="Vectors">Vectors</option>
      <option class="clear" value="Comic">Comic</option>
      <option class="clear" value="Realism">Realism</option>

      <option class="clear" value="NFTs">NFTs</option>
      <option class="clear" value="Anime">Anime</option>
      <option class="clear" value="Other">Media</option>
          
      </select>
      <input type="select"
      <label for="selected">Select Files</label>
      <input type="file" id="selected" name="upload" />
      
      <label class="clear" for="urlid">URL to images</label>
      <input class="clear" type="url" id="urlid" autofocus="true">
      
      <label class="clear" ></label>
      
      <input class="clear" type="submit" name="urlsubmit" onfocus="displayMyGallery()">
            
      </fieldset>
      </form>
      </div>
      `;
  
    const newForm = (document.createElement("form").innerText = formInnerHTML)
    return newForm};
  
// export {getUploadFiles, newDropFormTemplate, newForm} from module;