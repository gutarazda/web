function generarSimbolo() {
  const indice = Math.floor(Math.random() * simbolos.length);
  document.getElementById("resultado").textContent = simbolos[indice];
}