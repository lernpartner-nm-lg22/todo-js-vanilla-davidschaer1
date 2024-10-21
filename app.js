document.addEventListener('DOMContentLoaded', () => {
    const goalInput = document.getElementById('goal');
    const submitButton = document.getElementById('submit');
    const goalList = document.querySelector('ul#active-goals');
    const completedList = document.querySelector('ul#completed-goals');
    const deletedList = document.querySelector('ul#deleted-goals');
    const toggleDeletedButton = document.getElementById('toggle-deleted'); // Toggle button for deleted goals list
  
    // Function to add a new goal
    function addGoal() {
      const goalText = goalInput.value.trim();
      if (goalText !== '') {
        const newGoal = createGoalItem(goalText);
        goalList.appendChild(newGoal);
        goalInput.value = '';
      }
    }
  
    // Function to create a goal item with checkbox and delete button
    function createGoalItem(goalText) {
      const newGoal = document.createElement('li');
      newGoal.textContent = goalText;
  
      // Add checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // Checkbox change event
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          goalList.removeChild(newGoal);
          completedList.appendChild(newGoal);
        } else {
          completedList.removeChild(newGoal);
          goalList.appendChild(newGoal);
        }
      });
  
      // Add delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Löschen';
      deleteButton.addEventListener('click', () => {
        if (newGoal.parentElement === goalList) {
          goalList.removeChild(newGoal);
        } else if (newGoal.parentElement === completedList) {
          completedList.removeChild(newGoal);
        }
        deletedList.appendChild(newGoal);
        checkbox.disabled = true; // Disable the checkbox once the goal is deleted
      });
  
      newGoal.prepend(checkbox); // Add checkbox before the text
      newGoal.appendChild(deleteButton); // Add delete button at the end
      return newGoal;
    }
  
    // Event listener for the submit button
    submitButton.addEventListener('click', addGoal);
  
    // Event listener for the Enter key in the input field
    goalInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        addGoal();
      }
    });
  
    // Remove the initial "Test" list item (if any)
    const testItem = goalList.querySelector('li');
    if (testItem) {
      goalList.removeChild(testItem);
    }
  
    // Toggle visibility of deleted goals list
    toggleDeletedButton.addEventListener('click', () => {
      if (deletedList.style.display === 'none') {
        deletedList.style.display = 'block';
        toggleDeletedButton.textContent = 'Hide Deleted Goals';
      } else {
        deletedList.style.display = 'none';
        toggleDeletedButton.textContent = 'Show Deleted Goals';
      }
    });
  });
  