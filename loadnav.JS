const isInPages = window.location.pathname.includes('/pages/');
const navUrl = isInPages ? '../navbar.html' : 'navbar.html';

fetch(navUrl)
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        
        // If we are in the pages folder, adjust nav links to point to root
        if (isInPages) {
            const navLinks = document.querySelectorAll('#nav-placeholder a');
            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                if (href && !href.startsWith('http') && !href.startsWith('../')) {
                    link.setAttribute('href', '../' + href);
                }
            });
        }
        console.log("navbar loaded!!!");
    })
    .catch(error => console.error("Fetch failed:", error));