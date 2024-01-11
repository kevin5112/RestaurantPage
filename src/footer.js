export default function footer() {
  let footer = document.createElement('div');
  let copyright = document.createElement('p');
  let copyrightIcon = document.createElement('i');

  copyright.innerHTML = 'Copyright &copy 2024 kevin5112';
  footer.classList.add('footer');
  footer.appendChild(copyright);
  footer.appendChild(copyrightIcon);

  return footer;
}
