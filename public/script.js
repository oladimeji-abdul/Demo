document.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const colorButton = document.getElementById('colorButton');
    const apiButton = document.getElementById('apiButton');
    const apiResult = document.getElementById('apiResult');
    const decrementBtn = document.getElementById('decrementBtn');
    const incrementBtn = document.getElementById('incrementBtn');
    const counterValue = document.getElementById('counterValue');
    
    // Color changing functionality
    const colors = ['#f5f5f5', '#ffe8e8', '#e8f4ff', '#efffef', '#f9f0ff'];
    let colorIndex = 0;
    
    colorButton.addEventListener('click', () => {
      colorIndex = (colorIndex + 1) % colors.length;
      document.body.style.backgroundColor = colors[colorIndex];
    });
    
    // API fetch functionality
    apiButton.addEventListener('click', async () => {
      apiResult.textContent = 'Loading...';
      try {
        const response = await fetch('/api/greeting');
        const data = await response.json();
        apiResult.textContent = data.message;
      } catch (error) {
        apiResult.textContent = 'Error fetching data';
      }
    });
    
    // Counter functionality
    let count = 0;
    
    decrementBtn.addEventListener('click', () => {
      count--;
      counterValue.textContent = count;
    });
    
    incrementBtn.addEventListener('click', () => {
      count++;
      counterValue.textContent = count;
    });
  });