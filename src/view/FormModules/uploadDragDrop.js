

  
  export default fileDragSelectUpload(){

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
    





  
// export {getUploadFiles, newDropFormTemplate, newForm} from module;