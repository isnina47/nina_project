document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById('logo');
    const loadingScreen = document.getElementById('loading-screen');

    // 延遲0.5秒後開始顯示logo
    setTimeout(() => {
        logo.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        logo.style.opacity = 0;
    }, 3000);


    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        loadingScreen.style.pointerEvents = 'none';
    }, 3000);

});


