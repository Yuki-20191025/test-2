$(function () {
    $("#btn").click(function () {
        // 入力された値を取得
        
        // urlを設定
        var url = "https://zipcloud.ibsnet.co.jp/api/search",
        // 送るデータを成形する
        var param = { zipcode: zip};
        // サーバーと通信(Ajax)
        
        $.ajax({
            type: 'GET', 
            cache: false,
            data:{
                zipcode:zip
            },
            url: "https://zipcloud.ibsnet.co.jp/api/search",
            dataType: "jsonp"
        })
        .done(function (res) {
            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー
                // エラー内容を表示
                setAddress(zip_results[0]);

                $('#zip_result').html(res.message);
            } else {
                //住所を表示
                alert('該当するデータが見つかりませんでした');
            }

        })
        .fail(function (error) {
            console.log(error);
            $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
        });
    });
    function setAddress(res) {
        $('#prefcode').val(res.prefcode);
        $('#address1').val(res.address1);
        $('#address2').val(res.address2);
        $('#address3').val(res.address3);
        $("kana1").val(res.kana1);
        $("kana2").val(res.kana2);
        $("kana3").val(res.kana3);

    }
});