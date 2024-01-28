var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addbutton=document.getElementById("add-popup");
addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"  
    popupbox.style.display="block"
})
var cancel=document.getElementById("cancel-book")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"  
    popupbox.style.display="none"
})


var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var title=document.getElementById("input-title")
var author=document.getElementById("input-author")
var description=document.getElementById("description-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h5>${author.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"  
    popupbox.style.display="none"   
})
function deletebook(event){
    event.target.parentElement.remove()
}