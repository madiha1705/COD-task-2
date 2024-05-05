document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    const recipesDiv = document.getElementById('recipes');

    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting in a traditional way

        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;

        if (recipeName && ingredients) {
            // Create a new recipe card
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';

            const recipeTitle = document.createElement('h3');
            recipeTitle.textContent = recipeName;

            const recipeIngredients = document.createElement('p');
            recipeIngredients.textContent = Ingredients: ${ingredients};

            const deleteButton = document.createElement('button');
            deleteButton.className = 'delete-button';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                recipesDiv.removeChild(recipeCard);
            });

            recipeCard.appendChild(recipeTitle);
            recipeCard.appendChild(recipeIngredients);
            recipeCard.appendChild(deleteButton);

            recipesDiv.appendChild(recipeCard);

            // Reset the form
            recipeForm.reset();
        }
    });
});