function a() {
  var div = document.createElement("div")
  div.setAttribute("id", "number")
  div.innerHTML = 13000
  document.body.appendChild(div)
}

export default a