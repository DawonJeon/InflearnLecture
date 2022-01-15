/**
 * html,css
 * <label for=music>좋아하는 음악은?</label>
 * <input id=music value="장르를입력하세요">
 */

const music = {
    createElement(id) {
        this.element = document.getElementById(id);
    }

    get getAttributeValue() {}
    set setAttributeValue() {}
};

music.createElement("music")