export const utilsService = {
    saveToStorage,
    getFromStorage,
    getRandomId,
    getCaretPosition
}

function saveToStorage(key, val) {
	localStorage[key] = JSON.stringify(val);
}

function getFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

function getRandomId(length = 16) {  // duplicates odds 1:47,672,401,706,823,533,450,263,330,816‬
    return Math.random().toString(36).substring(2, length / 2) +
    Math.random().toString(36).substring(2, length / 2);

}

function getCaretPosition(editableDiv) {
    var caretPos = 0,
      sel, range;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        if (range.commonAncestorContainer.parentNode == editableDiv) {
          caretPos = range.endOffset;
        }
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      if (range.parentElement() == editableDiv) {
        var tempEl = document.createElement("span");
        editableDiv.insertBefore(tempEl, editableDiv.firstChild);
        var tempRange = range.duplicate();
        tempRange.moveToElementText(tempEl);
        tempRange.setEndPoint("EndToEnd", range);
        caretPos = tempRange.text.length;
      }
    }
    return caretPos;
  }