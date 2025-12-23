let cursor;
let X = 0;
let Y = 0;

document.addEventListener("DOMContentLoaded", () => {
  cursor = document.getElementById("cursor");

  document.addEventListener("mousemove", (e) => {
    X += (e.clientX - X) * 0.00005;
    Y += (e.clientY - Y) * 0.00005;

    cursor.style.left = X + "px";
    cursor.style.top  = Y + "px";
  });
});

function evento1() {
  document.getElementById("mensaje").innerHTML = "Eso fue genial.. No?";
  cursor.style.display = "block";
}
