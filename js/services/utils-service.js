export const utilsService = {
    saveToStorage,
    getFromStorage,
    getRandomId
}

function saveToStorage(key, val) {
	localStorage[key] = JSON.stringify(val);
}

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function getRandomId(length = 16) {  // duplicates odds 1:47,672,401,706,823,533,450,263,330,816‬
    Math.random().toString(36).substring(2, length / 2) +
    Math.random().toString(36).substring(2, length / 2);
}