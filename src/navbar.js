import loadContact from './contact';
import loadHomepage from './homepage';
import loadMenu from './menu';

function active(clicked_element) {
  console.log(clicked_element);
  let parentNode = clicked_element.parentNode;
  Array.from(parentNode.children).forEach((child) => {
    child.classList.remove('active');
  });
  clicked_element.classList.add('active');
}

export default function navBar() {
  let navBar = document.createElement('nav');
  navBar.classList.add('nav-bar');

  let homeBtn = document.createElement('button');
  homeBtn.classList.add('home-btn', 'active');
  homeBtn.innerHTML = 'Home';
  homeBtn.onclick = function () {
    active.call(this, homeBtn);
    loadHomepage();
  };

  let menuBtn = document.createElement('button');
  menuBtn.classList.add('menu-btn');
  menuBtn.innerHTML = 'Menu';
  menuBtn.onclick = function () {
    active.call(this, menuBtn);
    loadMenu();
  };

  let contactBtn = document.createElement('button');
  contactBtn.classList.add('contact-btn');
  contactBtn.innerHTML = 'Contact';
  contactBtn.onclick = function () {
    active.call(this, contactBtn);
    loadContact();
  };

  navBar.appendChild(homeBtn);
  navBar.appendChild(menuBtn);
  navBar.appendChild(contactBtn);

  return navBar;
}
