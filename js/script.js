// JavaScript Document
document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.getElementById('mobile-menu');
	const navMenu = document.querySelector('.nav-menu');
	const appList = document.querySelector('.app-list ul');
	
	menuToggle.addEventListener('click', function () {
		navMenu.classList.toggle('active');
	});
	
	const apps = [
		{
			name: "App Name 1",
			description: "Description of App 1",
			imageSrc: "images/web/Red_square.svg",
			downloadLink: "apks/instagram.apk"
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
});