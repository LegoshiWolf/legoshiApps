document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired.");

    // Get the current page's URL
    const currentPageUrl = window.location.href;

    // Get all menu items
    const menuItems = document.querySelectorAll('.navbar a');

    // Check if the current URL is just the domain without specifying any file
    if (currentPageUrl.endsWith('/') || currentPageUrl.endsWith('/index.html')) {
        document.querySelector('.navbar a[href="index.html"]').classList.add('active');
    } else {
        menuItems.forEach(function (menuItem) {
            // Get the URL of the linked page from its href attribute
            const pageUrl = menuItem.href;

            // Compare the current page's URL with the linked page's URL
            if (currentPageUrl === pageUrl) {
                menuItem.classList.add('active');
            }
        });
    }

    // Check if appList exists
    const appList = document.querySelector('.app-list ul');
    if (appList) {
        const apps = [
            {
                name: "Time Calculator",
                description: "Quickly calculate the time difference between two moments, displaying results in minutes or hours and minutes. Easy to use and supports multiple languages.",
                imageSrc: "images/web/time_calc_app_logo.png",
                downloadLink: "apks/TimeCalculator.apk"
            }
        ];

        function generateAppHTML(app) {
            return `
                <li>
                    <img src="${app.imageSrc}" alt="${app.name}">
                    <h3>${app.name}</h3>
                    <p>${app.description}</p>
                    <a href="${app.downloadLink}" download class="download-button">
                        <span class="button-title">Download</span>
                        <i class="fas fa-download"></i>
                    </a>
                </li>
            `;
        }

        function populateAppList() {
            let html = "";
            apps.forEach(function(app) {
                html += generateAppHTML(app);
            });
            appList.innerHTML = html;
        }

        populateAppList();
    }
});
