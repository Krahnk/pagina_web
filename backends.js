const cursor = document.getElementById("cursor");

function evento1() {
  alert("lo apretaste!!");
  document.getElementById("mensaje").innerHTML = "Eso fue genial.. No?";
  cursor.style.display = "block"; 
}

document.addEventListener("mousemove", (e) => {
    X += (e.clientX - X ) * 0.01;
    Y += (e.clientY - Y ) * 0.01;
  cursor.style.left = X + "px";
  cursor.style.top = Y + "px";
});
