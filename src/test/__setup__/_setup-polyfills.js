// Polyfills required for latest version of React and Jest

global.requestAnimationFrame = (cb) => {
	setTimeout(cb, 0)
};

global.cancelAnimationFrame = (cb) => {
	setTimeout(cb, 0);
};