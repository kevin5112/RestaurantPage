import homepage from './homepage.js';

export default function component() {
  let content = document.createElement('div');
  content.id = 'content';
  document.body.appendChild(content);

  content.appendChild(homepage());

  return content;
}

document.body.appendChild(component());
