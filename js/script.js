const foodDatabase = [
    {
      "name": "paneer",
      "calories": 165,
      "protein_g": 31
    },
    {
      "name": "dahi",
      "calories": 59,
      "protein_g": 10
    },
    {
      "name": "chana",
      "calories": 116,
      "protein_g": 9
    }
]

const foodSelect = document.getElementById('food-select');
const weightInput = document.getElementById('weight-input');
const proteinDisplay = document.getElementById('protein-display');
const caloriesDisplay = document.getElementById('calories-display');

function calculate(){
    // Get Selected Food
    const selectedValue = foodSelect.value;
    const currentFoodData = foodDatabase.find((res) => res.name === selectedValue);
    
    // Get Weight
    const currentWeight = Number(weightInput.value);
    
    if(currentWeight > 0){
        // Get Protein Value
        const proteinValue = Math.round((currentWeight / 100) * currentFoodData.protein_g);
        proteinDisplay.textContent = `${proteinValue}g`;

        // Get Calorie Value
        const caloriesValue = Math.round((currentWeight / 100) * currentFoodData.calories);
        caloriesDisplay.textContent = caloriesValue;
    } else {
        proteinDisplay.textContent = '0g';
        caloriesDisplay.textContent = 0;
    }    
}

weightInput.addEventListener('input', calculate);
foodSelect.addEventListener('change', calculate);