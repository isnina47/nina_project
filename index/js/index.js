// 屋裡探索動畫
$(function () {
    let divWidth = $('.explore').width()
    let imgCount = $('#content li').length


    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append(`<li></li>`)
        // 將contentButton 加上 li
    }
    $('#contentButton li:first').addClass('clicked')
    // 第一個li 加上 clicked 的CSS效果

    $('#content li').width(divWidth)   // li的寬度
    $('#content').width(divWidth * imgCount)   // ul的寬度(li*圖片數量)

    let index = 0;
    let timer = setInterval(moveToNext, 5000)

    $('#contentButton li').click(function () {
        clearInterval(timer) //停掉計時器

        index = $(this).index()
        // alert(index)

        $('#content').animate({
            left: divWidth * index * -1,
            // 每次按就把圖片往左邊推
        })

        $(this).addClass('clicked')
        $('#contentButton li').not(this).removeClass('clicked')

        timer = setInterval(moveToNext, 5000) //重新啟動計時器
    })

    function moveToNext() {
        // 控制 index 只能介於 li數量之間
        if (index < imgCount - 1) {
            index += 1
            // 圖片輪播完會繼續加上去 畫面會空白
        } else {
            index = 0
        }

        $('#content').animate({
            left: divWidth * index * -1,
            // 每次按就把圖片往左邊推
        })

        $(`#contentButton li:eq(${index})`).addClass('clicked')
        $('#contentButton li').not(`:eq(${index})`).removeClass('clicked')
    }
});


// back to top 按鈕
$(function () {
    $('#top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 333);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            // 螢幕往下拉超過800px顯示top按鈕
            $('#top').fadeIn(555);
        } else {
            $('#top').stop().fadeOut(0);
            // 回到最上方按鈕即消失
        }
    }).scroll();
});
