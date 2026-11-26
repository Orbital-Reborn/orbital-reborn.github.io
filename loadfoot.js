const isInPages = window.location.pathname.includes('/pages/');
const footURL = isInPages ? '../footer.html' : 'footer.html';

fetch(footURL)
    .then(response => response.text())
    .then(data => {
        document.getElementById('foot-placeholder').innerHTML = data;
        
        // stupid case sensitivity
        if (isInPages) {
            const navLinks = document.querySelectorAll('#foot-placeholder a');
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('../')) {
                    link.setAttribute('href', '../' + href);
                }
            });
        }
        console.log("Footer loaded!!!");
    })
    .catch(error => console.error("Fetch failed:", error));