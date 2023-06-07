



export default newArtistForm() {
    const formInnerHTML = ` 
  
    <div class="styleform">
  
      <form action="" id="user" name="user-form" method="post" >
      <fieldset>
      <legend class="clear"><h3>New Account:</h3></legend>
      
      <label class="clear" for="first">First Name:</label>
      <input class="clear" type="text" id="first" name="owner-name">
      <label class="clear" for="last">Last Name:</label>
      <input class="clear" type="text" id="last" name="last-name">
      
      <label class="clear" for="phone">Phone number:</label>
      <input class="clear" type="text" id="phone" name="owner-phone">
      
      <label class="clear" for="emailid">Email:<span>&ensp;</span></label>
      <input class="clear" type="email" id="emailid" name="owner-email">
      

      <label class="clear" for="bioid">Bio:</label>
      <input class="clear" type="textarea" id="bioid" autofocus="true" >
      
      <label class="clear" ></label>
      
      <input class="clear" type="submit" name="urlsubmit" onfocus="displayMyGallery()">
      
      
      </fieldset>
      </form>
      </div>
      `;
  
    const NewForm = (document.createElement("form").innerText = formInnerHTML);
    return NewForm};
  