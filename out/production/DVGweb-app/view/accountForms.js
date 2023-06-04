// Login Form

export function logInFormTemplate() {
    const formInnerHTML = `
              
            <div class="clear styleform" form-login">
            <form class="clear" action="/form.data" id="loginform" name="logform">
            <fieldset class="clear" >
            <legend class="clear"><h3>User Login:</h3></legend>
            
            <label class="clear">User Name</label>
            <input class="clear" type="text" name="userName" id="loginName">
            <label class="clear">User Email</label>
            <input class="clear" type="text" name="userEmail" id="loginEmail">
              
            </br>
            <label class="clear"for="submit"></label>
            <input class="clear" type="submitlog" name="submit" id="submitlog" value="submit" placeholder="Submit" >
            </fieldset>
            </form>`;
  
    const NewForm = (document.createElement("div").innerText = formInnerHTML);
    return NewForm;
  };

//   new Account 

export function newAccountFormTemplate() {
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
      
      <label class="clear" for="fqd">Host, Path, Base otions</label>
      <input class="clear" type="text" id="fqd" name="attr" value="value">
      
      <label class="clear" for="urlid">URL to images</label>
      <input class="clear" type="url" id="urlid" autofocus="true">
      
      <label class="clear" ></label>
      
      <input class="clear" type="submit" name="urlsubmit" onfocus="displayMyGallery()">
      
      
      </fieldset>
      </form>
      </div>
      `;
  
    const NewForm = (document.createElement("form").innerText = formInnerHTML);
    return NewForm;
  }

//   non user Sign up Searchers

export function buyerFormTemplate() {
    const formInnerHTML = `
              
              <div class="form-buyer styleform">
              <form action="" id="artform" name="artform">
              <fieldset>
            <legend  class="clear"><h3>Collector Profile:</h3></legend>
              <label class="clear" for="loginName>User Name</label>
              <input class="clear" type="text" name="userName" id="loginName">
              <label class="clear" for="loginEmail>User Email</label>
              <input class="clear" type="text" name="userEmail" id="loginEmail">
              <input class="clear" type="button" value="Submit">
            </fieldset>
              </form>
              </div>`;
  
    const NewForm = (document.createElement("form").innerText = formInnerHTML);
    return NewForm;}


