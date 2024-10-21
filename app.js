document.addEventListener('DOMContentLoaded', () => {
    const goalInput = document.getElementById('goal');
    const submitButton = document.getElementById('submit');
    const goalList = document.querySelector('ul');
  
    // Function to add a new goal
    function addGoal() {
      const goalText = goalInput.value.trim();
      if (goalText !== '') {
        const newGoal = document.createElement('li');
        newGoal.textContent = goalText;
        
        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Löschen';
        deleteButton.addEventListener('click', () => {
          goalList.removeChild(newGoal);
        });
        
        newGoal.appendChild(deleteButton);
        goalList.appendChild(newGoal);
        goalInput.value = '';
      }
    }
  
    // Event listener for the submit button
    submitButton.addEventListener('click', addGoal);
  
    // Event listener for the Enter key in the input field
    goalInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addGoal();
      }
    });
  
    // Remove the initial "Test" list item
    const testItem = goalList.querySelector('li');
    if (testItem) {
      goalList.removeChild(testItem);
    }
  });