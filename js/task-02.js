const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
    let item = document.createElement('li');
    item.textContent = ingredient;
    console.log(item);
    return ingredientsList.append(item);
});


