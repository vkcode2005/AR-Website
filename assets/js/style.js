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

// Initialize Netlify Identity
document.addEventListener('DOMContentLoaded', function() {
    netlifyIdentity.init();

    // Handle form submission for creating new posts
    document.getElementById('postForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const tags = document.getElementById('tags').value.split(',');

        // Logic to create a new post
        const newPost = {
            title: title,
            body: content,
            tags: tags,
            date: new Date().toISOString()
        };

        // Send the new post data to the backend (this part will depend on your backend setup)
        // Example: fetch('/api/posts', { method: 'POST', body: JSON.stringify(newPost) })
        console.log('New Post Created:', newPost);
    });
});
