document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const buttonHome = document.getElementById('button-home');
    const buttonPortfolio = document.getElementById('button-portfolio');
    let url = 'partials/home.html';  // Default URL to load the home page

    const loadContent = function(urlFeed) {
        fetch(urlFeed)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    };

    const selectContent = function(event) {
        event.preventDefault();  // Prevent the default link behavior
        const urlFeed = event.target.getAttribute('href');  // Get the URL from the clicked link's href attribute
        loadContent(urlFeed);  // Load the content
    };

    // Set up event listeners for the navigation buttons
    buttonHome.addEventListener('click', selectContent);
    buttonPortfolio.addEventListener('click', selectContent);

    // Load default content (home page) on initial load
    
    loadContent(url);
});
