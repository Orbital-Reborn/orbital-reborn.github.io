const navUrl = isInPages ? '../navbar.html' : 'navbar.html';

fetch(navUrl)
    .then(response => response.text())
    .then(data => {
        document.getElementById('nav-placeholder').innerHTML = data;
        
        // stupid case sensitivity
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