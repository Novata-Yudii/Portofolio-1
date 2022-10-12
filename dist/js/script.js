const loader = document.querySelector(".container-loader");
function loaderNonActive() {
  loader.classList.add("loader-nonactive");
}

function loaderTimeOut() {
  setInterval(loaderNonActive, 3000);
}

window.onload = loaderTimeOut;
