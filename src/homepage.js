function createHomepage() {
  let homepage = document.createElement('div');
  let homepageContent = document.createElement('div');
  homepageContent.classList.add('homepage');
  homepage.classList.add('content-box');

  let description = document.createElement('p');
  description.textContent = 'Best pizza in the country';
  let description2 = document.createElement('p');
  description2.textContent = 'Made with passion since 1609';
  let chefImg = document.createElement('img');
  chefImg.classList.add('chef-img');
  chefImg.src = 'img/ramsay.jpeg';
  chefImg.alt = 'Chef';
  let slogan = document.createElement('p');
  slogan.textContent = 'Order online or visit us!';

  homepageContent.appendChild(description);
  homepageContent.appendChild(description2);
  homepageContent.appendChild(chefImg);
  homepageContent.appendChild(slogan);
  homepage.appendChild(homepageContent);
  return homepage;
}

export default function loadHomepage() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  main.appendChild(createHomepage());
}
