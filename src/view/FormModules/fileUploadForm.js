

export default fileUploadForm(){

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
