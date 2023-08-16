function toggleMode() {
 const html = document.documentElement
  html.classList.toggle('light')

 // pegar tag img
 const img = document.querySelector("#profile img")

 if(html.classList.contains('light')){
    img.setAttribute('src', "./assets/bruno.png")
 } else {
    img.setAttribute("src", "./assets/PhotoGrid_Site_1692072767203.png")
 }

 // substituir a imagem
 // se tiver light mode, aadicionar imagem light
 //se tiver sem light mode, manter a imagem normal
}