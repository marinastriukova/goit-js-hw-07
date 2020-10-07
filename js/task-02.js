const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsList = document.querySelector('#ingredients');

const makeIngredientsList = vegetables => {
  return vegetables.map(vegetable => {
    const item = document.createElement('li');
    item.textContent = vegetable;
    console.log(item);
    return item;
  });
};

const elements = makeIngredientsList(ingredients);
ingredientsList.append(...elements);

