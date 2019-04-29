// Inject empty style element for us to use
const style = document.createElement('style');
document.addEventListener('DOMContentLoaded', () => document.body.appendChild(style));

// Set tab size styles
const setTabSizeStyles = size => style.innerHTML = `
body {
	--tab-size: ${size};
}
* {
	-moz-tab-size: var(--tab-size) !important;
	     tab-size: var(--tab-size) !important;
}`;

// Set tab size from settings on load
chrome.storage.sync.get({
	tabSize: 8
}, items => setTabSizeStyles(items.tabSize));

// Update tab style if the setting updates
chrome.storage.onChanged.addListener(items => {
	if(items.tabSize) {
		setTabSizeStyles(items.tabSize.newValue);
	}
});
