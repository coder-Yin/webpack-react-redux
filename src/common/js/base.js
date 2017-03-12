(function () {
    var documentElement = document.documentElement;
    //Use rem
    documentElement.style.fontSize = documentElement.getBoundingClientRect().width / 10 + 'px';

})();

$.ajaxSettings.xhrFields = {
	withCredentials: true
};
