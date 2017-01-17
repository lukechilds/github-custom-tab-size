const title = document.querySelector('h1');
const tabSize = document.querySelector('.tab-size');

// Handle tab size change
setTabSize = () => {
  title.innerText = `Tab Size: ${tabSize.value}`;
}

// Check size on init
setTabSize();

// Bind handler function to tab size input
tabSize.addEventListener('input', setTabSize);
