export const utilsService = {
    saveToStorage,
    getFromStorage
};

function saveToStorage(key, val) {
	localStorage[key] = JSON.stringify(val);
}

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}