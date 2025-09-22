(function() {
    function createHeadElement(tag, attributes) {
        const element = document.createElement(tag);
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
        document.head.appendChild(element);
    }

    const headElements = [
        { tag: 'link', attrs: { rel: 'icon', href: '/assets/NTD.png', type: 'image/png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/assets/NTD.png', type: 'image/png' } },

        { tag: 'meta', attrs: { property: 'og:title', content: 'Noteted' } },
        { tag: 'meta', attrs: { property: 'og:description', content: 'An open-source, free and simple note taking app.' } },
        { tag: 'meta', attrs: { property: 'og:url', content: 'https://noteted.netlify.app' } },
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://noteted.netlify.app/assets/NTD.png' } },

        { tag: 'meta', attrs: { name: 'theme-color', content: '#141414', 'data-react-helmet': 'true' } }
    ];

    headElements.forEach(element => createHeadElement(element.tag, element.attrs));
})();