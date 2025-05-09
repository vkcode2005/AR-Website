// Sidebar link click handler
document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        const checkbox = document.querySelector('.hamburger-menu input');
        if (checkbox) checkbox.checked = false;
    });
});

// Click outside sidebar closes menu
document.addEventListener('click', function (e) {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger-menu');
    const checkbox = document.querySelector('.hamburger-menu input');

    if (sidebar && hamburger && checkbox) {
        if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            checkbox.checked = false;
        }
    }
});

// Search filter for content cards
function searchContent() {
    const inputEl = document.getElementById('searchInput');
    const input = inputEl ? inputEl.value.toLowerCase() : "";
    const cards = document.querySelectorAll('.content-card');

    cards.forEach(card => {
        const title = (card.querySelector('h3')?.textContent || "").toLowerCase();
        const description = (card.querySelector('p')?.textContent || "").toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Loader hide and content show
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        const contentGrid = document.querySelector('.content-grid');

        if (loader) loader.style.display = 'none';
        if (contentGrid) contentGrid.style.display = 'grid';
    }, 100);
});

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
}

// Netlify Identity init
document.addEventListener('DOMContentLoaded', function () {
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user) => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                });
            }
        });
        window.netlifyIdentity.init();
    } else {
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
        }, 100);
    }
});
