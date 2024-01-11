function createMenu() {
  let menu = document.createElement('div');
  let menuBox = document.createElement('div');

  menuBox.classList.add('content-box', 'menu-box');
  menu.classList.add('menu');
  menuBox.appendChild(menu);

  menu.appendChild(
    createMenuItem(
      'Salsiccia',
      'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Gamberi',
      'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Pepe',
      'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Disgustoso',
      'Tomato sauce, Bacon, Pineapple, Olives, Basil'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Colorato',
      'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Pomodoro',
      'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Crema',
      'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil'
    )
  );

  menu.appendChild(
    createMenuItem(
      'Carne',
      'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli'
    )
  );

  return menuBox;
}

function createMenuItem(name, description) {
  let pizzaItem = document.createElement('div');
  pizzaItem.classList.add('pizza');
  let pizzaName = document.createElement('h1');
  let pizzaDescription = document.createElement('p');
  let pizzaImage = document.createElement('img');

  pizzaName.innerHTML = name;
  pizzaDescription.innerHTML = description;
  pizzaImage.src = '../img/' + name.toLowerCase() + '.png';

  pizzaItem.appendChild(pizzaImage);
  pizzaItem.appendChild(pizzaName);
  pizzaItem.appendChild(pizzaDescription);

  return pizzaItem;
}

export default function loadMenu() {
  let main = document.getElementById('main');
  main.innerHTML = '';

  main.appendChild(createMenu());

  return main;
}
