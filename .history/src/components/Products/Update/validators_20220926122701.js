

export const isNameValid = (value) => {
	return value.trim().length > 0 && value.trim().length <= 200;
};

export const isCategoriesValid = (value) => {
	return value.length > 0 && value.length <= 5;
}

export const isExpiredAfter30Day = (value) => {
	console.log(parseInt(((new Date(value))  - new Date().getTime() ) /(1000*60*60*24), 10)) 
}
