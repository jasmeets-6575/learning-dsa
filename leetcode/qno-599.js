const formatNumber = (num) => {
	if (num && num >= 1000) {
		return (num / 1000).toFixed(1) + 'k';
	}
	return num;
};

console.log(formatNumber(123123));