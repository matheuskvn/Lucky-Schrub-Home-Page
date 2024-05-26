function toggleTextHover(imgElement, textElement) {
  imgElement.addEventListener('mouseover', () => {
    textElement.style.display = 'block';
    textElement.style.left = `${imgElement.offsetLeft + 10}px`;
    textElement.style.top = `${imgElement.offsetTop + 10}px`;
  });

  imgElement.addEventListener('mouseout', () => {
    textElement.style.display = 'none';
  });
}

const imagem = document.getElementById('garden-img');
const textoHover = document.getElementById('text-hover');
toggleTextHover(imagem, textoHover);

const imagem2 = document.getElementById('jason-img');
const textoHover2 = document.getElementById('jason-img-span');
toggleTextHover(imagem2, textoHover2);

const imagem3 = document.getElementById('maria-img');
const textoHover3 = document.getElementById('maria-img-span');
toggleTextHover(imagem3, textoHover3);

const imagem4 = document.getElementById('garden-img2');
const textoHover4 = document.getElementById('garden-img2-span');
toggleTextHover(imagem4, textoHover4);