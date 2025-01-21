document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired.");

    function isMobileOrTablet() {
        return /Mobi|Android|Tablet|iPad|iPhone/i.test(navigator.userAgent);
    }

    function enforceOrientation() {
        if (isMobileOrTablet()) {
            if (window.innerWidth > window.innerHeight) {
                // Device is in landscape mode
                if (!sessionStorage.getItem("landscapeAlertShown")) {
                    document.body.style.display = "none";
                    alert("Please rotate your device to portrait mode.");
                    sessionStorage.setItem("landscapeAlertShown", "true"); // Set the flag to true after showing the alert
                }
            } else {
                // Device is in portrait mode or desktop
                document.body.style.display = "block";
                sessionStorage.removeItem("landscapeAlertShown"); // Remove the flag when in portrait mode
            }
        }
    }

    window.addEventListener("load", enforceOrientation);
    window.addEventListener("resize", enforceOrientation);

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

    // Check if gameList exists
    const gameList = document.querySelector('.games-list ul');
    if (gameList) {
        const games = [
            {
                name: "Test Game",
                description: "Just a empty test game zip file",
                imageSrc: "images/web/time_calc_app_logo.png",
                downloadLink: "games/testgame.zip"
            }
        ];

        function generateGameHTML(game) {
            return `
                <li>
                    <img src="${game.imageSrc}" alt="${game.name}">
                    <h3>${game.name}</h3>
                    <p>${game.description}</p>
                    <a href="${game.downloadLink}" download class="download-button">
                        <span class="button-title">Download</span>
                        <i class="fas fa-download"></i>
                    </a>
                </li>
            `;
        }

        function populateGameList() {
            let html = "";
            games.forEach(function(game) {
                html += generateGameHTML(game);
            });
            gameList.innerHTML = html;
        }

        populateGameList();
    }
});
