const toast = document.querySelector('.toast');

const showNotification = (x, y) => {
	toast.classList.add('active');

	setTimeout(() => {
		toast.classList.remove('active');
	}, 2000);
};

window.addEventListener('contextmenu', e => {
	e.preventDefault();
	// get user mouse position
	const x = e.clientX;
	const y = e.clientY;
	showNotification(x, y);
});
