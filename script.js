function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

    //pegar a tag img
    const img = document.querySelector('#profile img')

    //substituir a imagem
  if (html.classList.contains('light')) {
      //se tiver light mode, adicionar a imagem img2
      img.setAttribute('src', './assets/img2.png')
  } else {
      //se tiver sem light mode, manter a imagem default
      img.setAttribute('src', 'assets/img1.png')
  }

  // if (html.classList.contains('light')) {
  //     html.classList.remove('light')
  // } else {
  //     html.classList.add('light')
  // }

}