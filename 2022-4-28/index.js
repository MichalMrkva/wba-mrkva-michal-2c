
function clickme(){
    const targetDiv = document.getElementById("textbox");
    if (targetDiv.style.display !== "none") {
        targetDiv.style.display = "none";
    } 
    else {
        targetDiv.style.display = "flex";
    }

}

