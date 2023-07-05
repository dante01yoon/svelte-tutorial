export const getRandomNumber = (timeout = 3000) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(~~(Math.random() * 1001));
		}, timeout);
	});
};
