const formulario = document.getElementsByClassName("form-container")[0]
const img = document.getElementById("qr-image")
const input = document.getElementById("input-text")

formulario.addEventListener("submit", function(event){
    event.preventDefault()

    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + input.value
});