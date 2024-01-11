export default function footer() {
  let footer = document.createElement('div');
  let copyright = document.createElement('p');

  copyright.innerHTML = 'Copyright &copy 2024 kevin5112 ';
  footer.classList.add('footer');
  footer.appendChild(copyright);

  const githubLink = document.createElement('a');
  githubLink.href = 'https://github.com/kevin5112';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab');
  githubIcon.classList.add('fa-github');

  githubLink.appendChild(githubIcon);
  footer.appendChild(githubLink);

  return footer;
}
