$(function () {

    //表示するページ番号
    var pageNumber = 1;

    //prevボタンを押したときの処理
    $("#prev").click(function () {
        if(pageNumber > 1) {
            pageNumber--;
        }
        socket.emit('showPicture', { page: pageNumber });
    });

    //nextボタンを押したときの処理
    $("#next").click(function () {
        if(pageNumber < 3) {
            pageNumber++;
        }
        socket.emit('showPicture', { page: pageNumber });
    });

    //socket.ioの初期化処理
    var socket = io.connect('http://localhost:3000');
    socket.on('connect', function (msg) {
        console.log("connect");
    });

    //showPictureメッセージをうけとったときの処理
    socket.on('showPicture', function (msg) {
        pageNumber = msg.page;
        console.dir(msg);
        $("#image").attr("src","/images/sample-0" + pageNumber + ".jpg");
    });

});