const cursor = document.getElementById("cursor");

let X = 0;
let Y = 0;

function evento1() {
  document.getElementById("mensaje").innerHTML = "Eso fue genial.. No?";
  cursor.style.display = "block"; 
}

document.addEventListener("mousemove", (e) => {
    X += (e.clientX - X ) * 0.5;
    Y += (e.clientY - Y ) * 0.5;
  cursor.style.left = X + "px";
  cursor.style.top = Y + "px";
});
