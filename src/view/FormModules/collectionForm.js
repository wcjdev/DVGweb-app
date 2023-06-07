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