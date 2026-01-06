let cursor;
let X = 0;
let Y = 0;
let mouseX = 0;
let mouseY = 0;
const speed = 0.05;

document.addEventListener("DOMContentLoaded", () => {
  cursor = document.getElementById("cursor");
});

//actualizar la posicion del mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animar() {
  X += (mouseX - X) * speed;
  Y += (mouseY - Y) * speed;

  if (cursor) { 
    cursor.style.left = X + "px";
    cursor.style.top  = Y + "px";
  }

  requestAnimationFrame(animar); 
}

// inicia el loop
animar(); 


function evento1() {
  document.getElementById("mensaje").innerHTML = "Eso fue genial.. No?";
  cursor.style.display = "block";
}
