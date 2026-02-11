
document.addEventListener('DOMContentLoaded', function () {
    // Configuration
    const SEARCH_DEBOUNCE_MS = 150;
    const SNIPPET_LENGTH = 70;

    // Elements
    const desktopInput = document.getElementById('desktopSearchInput');
    const desktopDropdown = document.getElementById('desktopSearchDropdown');
    const mobileInput = document.getElementById('mobileSearchInput');
    const mobileDropdown = document.getElementById('mobileSearchDropdown');

    // State
    let searchIndex = [];
    let activeInput = null;
    let activeDropdown = null;
    let selectedIndex = -1;
    let debounceTimer;

    // 1. Build Index on Load
    function buildIndex() {
        const sections = document.querySelectorAll('.content-section');
        searchIndex = Array.from(sections).map((section, index) => {
            // Find a title: H1, H2, H3, or card-title
            const titleEl = section.querySelector('h1, h2, h3, .card-title, strong');
            let title = titleEl ? titleEl.innerText : 'Untitled Section';

            // Refine title if it's just a "strong" tag inside a paragraph
            if (titleEl && titleEl.tagName === 'STRONG' && title.length > 50) {
                title = 'Section ' + (index + 1);
            }

            // Get text content, clean up whitespace
            const content = section.innerText.replace(/\s+/g, ' ').trim();

            return {
                id: section.id || `section-${index}`,
                title: title,
                content: content,
                element: section
            };
        });

        // Add sub-sections or specific cards if needed for more granularity?
        // For now, main sections and cards within them are good. 
        // Let's also index .content-card separately if they are significant?
        // The current selector .content-section covers major blocks. 
        // Let's also add .card inside .content-section to the index if they have IDs or unique content
        // Actually, searching the whole section text is safer for context.
    }

    buildIndex();

    // 2. Event Listeners
    setupSearch(desktopInput, desktopDropdown);
    setupSearch(mobileInput, mobileDropdown);

    function setupSearch(input, dropdown) {
        if (!input || !dropdown) return;

        input.addEventListener('input', (e) => handleInput(e, input, dropdown));
        input.addEventListener('keydown', (e) => handleKeydown(e, dropdown));
        input.addEventListener('focus', () => {
            if (input.value.trim().length > 0) {
                activeInput = input;
                activeDropdown = dropdown;
                dropdown.classList.add('active');
            }
        });
    }

    // Global click to close
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container') && !e.target.closest('.search-container-mobile')) {
            closeDropdowns();
        }
    });

    // 3. Handlers
    function handleInput(e, input, dropdown) {
        clearTimeout(debounceTimer);
        activeInput = input;
        activeDropdown = dropdown;

        const term = e.target.value.trim();

        // Sync inputs (optional, but good for consistency)
        if (input === desktopInput && mobileInput) mobileInput.value = term;
        if (input === mobileInput && desktopInput) desktopInput.value = term;

        if (term.length < 2) {
            closeDropdowns();
            return;
        }

        debounceTimer = setTimeout(() => {
            const results = performSearch(term);
            renderResults(results, dropdown, term);
        }, SEARCH_DEBOUNCE_MS);
    }

    function performSearch(term) {
        const lowerTerm = term.toLowerCase();
        return searchIndex.filter(item => {
            return item.title.toLowerCase().includes(lowerTerm) ||
                item.content.toLowerCase().includes(lowerTerm);
        }).map(item => {
            // Find best snippet position
            const contentLower = item.content.toLowerCase();
            const titleMatch = item.title.toLowerCase().includes(lowerTerm);

            let snippet = '';
            if (titleMatch) {
                // If matched title, show start of content
                snippet = item.content.substring(0, SNIPPET_LENGTH);
            } else {
                // Find occurrence in content
                const idx = contentLower.indexOf(lowerTerm);
                const start = Math.max(0, idx - 10);
                const end = Math.min(item.content.length, idx + term.length + SNIPPET_LENGTH);
                snippet = (start > 0 ? '...' : '') +
                    item.content.substring(start, end) +
                    (end < item.content.length ? '...' : '');
            }

            return { ...item, snippet };
        });
    }

    function renderResults(results, dropdown, term) {
        dropdown.innerHTML = '';
        selectedIndex = -1;

        if (results.length === 0) {
            dropdown.innerHTML = '<div class="search-no-results">No matches found</div>';
            dropdown.classList.add('active');
            return;
        }

        results.forEach((result, index) => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <span class="search-result-title">${highlightText(result.title, term)}</span>
                <span class="search-result-snippet">${highlightText(result.snippet, term)}</span>
            `;

            item.addEventListener('click', () => navigateToResult(result, term));
            dropdown.appendChild(item);
        });

        dropdown.classList.add('active');
    }

    function highlightText(text, term) {
        const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
        return text.replace(regex, '<span style="color: var(--accent-blue); font-weight:bold;">$1</span>');
    }

    function navigateToResult(result, term) {
        // Scroll
        result.element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Temporary Highlight implementation
        // We will highlight all text nodes in the target element that contain the term
        // then remove the highlight class after 3s
        highlightInElement(result.element, term);

        closeDropdowns();
    }

    function highlightInElement(element, term) {
        // Clean previous highlights first?
        // Maybe not strictly necessary if we rely on the fade out, but safer.

        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
        const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
        const nodesToHighlight = [];

        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (node.parentElement.tagName !== 'SCRIPT' && node.nodeValue.match(regex)) {
                nodesToHighlight.push(node);
            }
        }

        nodesToHighlight.forEach(node => {
            const span = document.createElement('span');
            // We wrap the whole text node content, replacing matches with styled spans
            // But for the "temp highlight" effect requested, we might want to highlight the SPECIFIC match.
            // Using a special class.

            const frags = node.nodeValue.split(regex);
            const fragment = document.createDocumentFragment();

            frags.forEach((frag, i) => {
                if (i % 2 === 1) { // Match
                    const mark = document.createElement('mark');
                    mark.className = 'temp-highlight';
                    mark.textContent = frag;
                    fragment.appendChild(mark);
                } else {
                    fragment.appendChild(document.createTextNode(frag));
                }
            });

            node.parentNode.replaceChild(fragment, node);
        });

        // Cleanup after animation (3s + buffer)
        setTimeout(() => {
            // This is tricky: we replaced text nodes with fragments containing marks.
            // To clean up, we need to find those marks and unwrap them.
            // Scoping to the element is good.
            const marks = element.querySelectorAll('mark.temp-highlight');
            marks.forEach(mark => {
                const parent = mark.parentNode;
                parent.replaceChild(document.createTextNode(mark.textContent), mark);
                parent.normalize();
            });
        }, 3500);
    }

    function handleKeydown(e, dropdown) {
        if (!dropdown.classList.contains('active')) return;

        const items = dropdown.querySelectorAll('.search-result-item');
        if (items.length === 0) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = (selectedIndex + 1) % items.length;
            updateSelection(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = (selectedIndex - 1 + items.length) % items.length;
            updateSelection(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex >= 0) {
                items[selectedIndex].click();
            }
        } else if (e.key === 'Escape') {
            closeDropdowns();
            activeInput.blur();
        }
    }

    function updateSelection(items) {
        items.forEach((item, idx) => {
            if (idx === selectedIndex) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    function closeDropdowns() {
        if (desktopDropdown) desktopDropdown.classList.remove('active');
        if (mobileDropdown) mobileDropdown.classList.remove('active');
        selectedIndex = -1;
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
});
