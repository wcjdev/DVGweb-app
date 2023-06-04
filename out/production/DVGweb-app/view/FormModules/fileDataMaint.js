// upload file form
export function fileUploadFormTemplate() {
  
    const html = String.raw;
    const formInnerHTML = html`
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
    const NewForm = (document.createElement("form").innerText = formInnerHTML);
    return NewForm};

    // file and data crud

    
export function artSignatureFormTemplate() {
    const formInnerHTML = `
              
              <div class="form-signature styleform">
              <form action="" id="artform" name="artform">
              <fieldset>
            <legend  class="clear"><h3>Art Piece Story:</h3></legend>
              <label class="clear" for="loginName>Title</label>
              <input class="clear" type="text" name="userName" id="loginName">
              <label class="clear" for="loginEmail>Sale</label>
              <input class="clear" type="text" name="userEmail" id="loginEmail">
              <label class="clear" for="loginEmail>Sale</label>
              <input class="clear" type="text" name="userEmail" id="loginEmail">
              <label class="clear" for="loginEmail>Upload</label>
              <input class="clear" type="file" name="ArtItem" id="loginEmail">
              <input class="clear" type="button" value="Submit">
            </fieldset>
              </form>
              </div>`;
  
    const NewForm = (document.createElement("form").innerText = formInnerHTML);
    return NewForm;
  }
  export function artCollectionFormTemplate() {
    const formInnerHTML = ` 
  
    <div class="styleform">
  
      <form action="" id="user" name="user-form" method="post" >
      <fieldset>
      <legend class="clear"><h3>Collection Owner:</h3></legend>
      
      <label class="clear" for="first">First Name:</label>
      <input class="clear" type="text" id="first" name="owner-name">
      <label class="clear" for="last">Last Name:</label>
      <input class="clear" type="text" id="last" name="last-name">
      
      <label class="clear" for="phone">Phone number:</label>
      <input class="clear" type="text" id="phone" name="owner-phone">
      
      <label class="clear" for="emailid">Email:<span>&ensp;</span></label>
      <input class="clear" type="email" id="emailid" name="owner-email">
      
      <label class="clear" for="fqd">Collection Title</label>
      <input class="clear" type="text" id="fqd" name="attr" value="value">
      
      <label class="clear" for="urlid">Signature</label>
      <input class="clear" type="url" id="urlid" autofocus="true">
  
      <label class="clear" for="urlid">Details</label>
      <input class="clear" type="textarea" id="urlid" autofocus="true" >
      
      <label class="clear" ></label>
      
      <input class="clear" type="submit" name="urlsubmit" onfocus="displayMyGallery()">
      
      
      </fieldset>
      </form>
      </div>
      `;
  
    const NewForm = (document.createElement("form").innerText = formInnerHTML);
    return NewForm};
  
  