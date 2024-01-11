function createContact() {
  let contact = document.createElement('div');
  let contactBox = document.createElement('div');

  contact.classList.add('contact');
  contactBox.classList.add('content-box', 'contact-box');

  let pNum = document.createElement('p');
  let addy = document.createElement('p');
  let locationImg = document.createElement('img');

  pNum.textContent = '📞 123 456 7890';
  addy.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
  locationImg.src = '../img/restaurant-location.png';

  contact.appendChild(pNum);
  contact.appendChild(addy);
  contact.appendChild(locationImg);

  contactBox.appendChild(contact);

  return contactBox;
}

export default function loadContact() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  main.appendChild(createContact());
  return main;
}
