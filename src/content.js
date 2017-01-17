// Inject empty style element for us to use
const style = document.createElement('style');
document.body.appendChild(style);

// Set tab size styles
const setTabSizeStyles = size => style.innerHTML = `
.tab-size[data-tab-size='2'],
.tab-size[data-tab-size='4'],
.tab-size[data-tab-size='8'],
.inline-review-comment,
.gist table.lines,
table.diff-table,
.markdown-body pre {
	tab-size: ${size} !important;
}`;

// Set tab size from settings on load
chrome.storage.sync.get({
	tabSize: 8
}, items => setTabSizeStyles(items.tabSize));
