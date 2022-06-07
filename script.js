function generateDog() {
    let image = document.createElement("img");
    let div = document.getElementById("flex-dog-gen");
    image.src = "http://thedogapi.com/api/images/get?format=src&type=gif&size=small"; 
    div.appendChild(image);  
}