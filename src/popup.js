const title = document.querySelector('h1');
const tabSize = document.querySelector('.tab-size');

// Show tab size
showTabSize = () => {
	title.innerText = `Tab Size: ${tabSize.value}`;
}

// Show size on init
showTabSize();

// Show current ize as they drag
tabSize.addEventListener('input', showTabSize);

// Only save the value when they've made up their mind
tabSize.addEventListener('input', () => chrome.storage.sync.set({
	tabSize: tabSize.value
}));

// Load previsouly saved settings
document.addEventListener('DOMContentLoaded', () => {
	chrome.storage.sync.get({
		tabSize: 8
	}, items => {
		tabSize.value = items.tabSize;
		showTabSize();
	});
});
