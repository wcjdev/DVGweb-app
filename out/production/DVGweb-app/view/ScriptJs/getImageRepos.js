

function getImageRepos(){

    document.getElementById("choosedir").addEventListener("change", (event) => {
        
        let output = document.getElementById("listing");
         for (const file of event.target.files) {
         let item = document.createElement("li");
         let image = document.createElement("img")
         let item1 = document.createElement("li");
         item.textContent = file.webkitRelativePath;
         let base = "./gallery/"
         image= `<img title="${file.name}" type="${file.type}" src="${base}${file.webkitRelativePath}" alt="${file.name}" width=50 height=50></img>`
         output.appendChild(item);
         item1.innerHTML=image;
         output.appendChild(item1);
       };
     }, false);


}