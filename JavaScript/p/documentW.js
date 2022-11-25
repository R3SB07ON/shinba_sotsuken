let url;
let param;


function move(){  
    url = "./documentR.html" + location.search;
    window.location.href = url;    
}

function save() {
    let filename = "file_" + params.get("file");
    localStorage.setItem(filename,document.getElementById("textarea").value);
}

window.onload = onLoad;
function onLoad(){
    url = new URL(window.location.href);
    params = url.searchParams;

    //資料名表示
    let elm = document.getElementById("filename");
    elm.innerHTML = params.get("file");

    //保存内容の反映
    let filename = "file_" + params.get("file");
    document.getElementById("textarea").value = localStorage.getItem(filename);
}

//画面離脱警告
window.addEventListener('beforeunload', function (e) {
    // イベントをキャンセルする
    e.preventDefault();
    // Chrome では returnValue を設定する必要がある
    e.returnValue = '';
  });

//保存内容の判定
function text_judge(){
    //ファイル名を取得
    url = new URL(window.location.href);
    params = url.searchParams;
    file_name = params.get("file");

    //テキストを取得
    text = localStorage.getItem("file_"+ file_name);

    if(file_name == "10_Company")           judge_10_Company(text);
    else if(file_name== "ExchangeRate")     judge_ExchangeRate(text);
}

function judge_10_Company(text){
    
}

function judge_ExchangeRate(text){

    const keyword = {
        "日経平均":"25,937.21",
        "米ドル/円":"144.72",
        "TOPIX":"1,835.94",
        "NYダウ":"28,725.51",
        "上海総合":"3,024.39",
        "ユーロ/円":"141.84"
    };


    let rate_num = 0;
    //正しく記入されているレート数を検出
    for(i in keyword){
        if(text.indexOf(i) != -1){
            if(text.indexOf(keyword[i]) != -1){
                console.log(i+keyword[i]);
                rate_num++;
            }else{
                //記入レートの数値に間違いがある
                //
            }
        }

        //正しく記入されているレート数に応じてパラメータ変動
        switch(rate_num){
            case 0:
                //
        }
    }

}
