document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.hamburger-menu input').checked = false;
    });
});

document.addEventListener('click', function (e) {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger-menu');
    if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        document.querySelector('.hamburger-menu input').checked = false;
    }
});

function searchContent() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.content-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';

        document.querySelector('.content-grid').style.display = 'grid';

    }, 1000);
});

const backToTopBtn = document.querySelector('.back-to-top');

backToTopBtn.addEventListener('click', () =>{
    window.scrollTo({top: 0, behavior : 'smooth'});
});

window.addEventListener('scroll', () =>{
    if(window.scrollY > 300){
        backToTopBtn.style.display ='block';
    } else{
        backToTopBtn.style.display ='none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Check if netlifyIdentity is available
    if (window.netlifyIdentity) {
        // Initialize the widget
        window.netlifyIdentity.on("init", (user) => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                });
            }
        });
        window.netlifyIdentity.init();
    } else {
        // Wait until the netlifyIdentity script loads
        const checkInterval = setInterval(() => {
            if (window.netlifyIdentity) {
                clearInterval(checkInterval);

                window.netlifyIdentity.on("init", (user) => {
                    if (!user) {
                        window.netlifyIdentity.on("login", () => {
                            document.location.href = "/admin/";
                        });
                    }
                });
                window.netlifyIdentity.init();
            }
        }, 100); // Check every 100ms
    }
});