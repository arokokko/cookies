window.addEventListener('DOMContentLoaded', () => {
	const cookiePopup = document.querySelector("#cookie"),
		gotCookieBtn = cookiePopup.querySelector(".cookie_btn");
		succesfullNotice = document.querySelector(".succesfull");

	const cookieStorage = {
		getItem: (key) => {
			const cookies = document.cookie
							.split(";")
							.map(elem => elem.split("="))
							.reduce((acc, [key, value]) => ({...acc, [key.trim()] : value}), {});
			
			return cookies[key];
		},
		setItem: (key, value) => {
			document.cookie = `${key}=${value}`;
		}
	};
	const storageType = cookieStorage;
	const consentType = "cookie_consent";

	
	showCookiePopup();
	
	gotCookieBtn.addEventListener('click', () => {
		saveToStorage();
		cookiePopup.classList.add('hide');
		succesfullNotice.classList.remove('hide');
	});


	function showCookiePopup() {
		if(!storageType.getItem(consentType)) {
			cookiePopup.classList.remove('hide');
			succesfullNotice.classList.add('hide');
		}
	}

	function saveToStorage() {
		storageType.setItem(consentType, 'yes');
	} 


});





