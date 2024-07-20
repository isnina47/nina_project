document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById('logo');
    const loadingScreen = document.getElementById('loading-screen');

    // 延遲0.5秒後開始顯示logo
    setTimeout(() => {
        logo.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        logo.style.opacity = 0;
    }, 4500);

    // 7秒後跳轉到主頁
    setTimeout(() => {
        window.location.href = "index.html";
    }, 7000,);
});

