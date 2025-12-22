const cursor = document.getElementById("cursor");

function evento1() {
  alert("lo apretaste!!");
  document.getElementById("mensaje").innerHTML = "Eso fue genial.. No?";
  cursor.style.display = "block"; 
}

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
