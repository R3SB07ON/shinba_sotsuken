let url;
let param;

//画面遷移警告回避フラグ
let moveflag = true;

function move(){  
    url = "./documentR.html" + location.search;
    window.location.href = url;    
}

function save() {
    moveflag = false;
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
    if(moveflag){
        // イベントをキャンセルする
        e.preventDefault();
        // Chrome では returnValue を設定する必要がある
        e.returnValue = '';
    }
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
    else                                    Z_doc_edit();               //資料に不要な書き込み
}

function judge_10_Company(text){
    const ivent_date = [
        "10月17日","10月18日","10月19日"
    ];

    const ivent_1017 = [
        "鉱工業生産確報値",
        "ニューヨーク連銀製造業景気指数",
        "バンク・オブ・アメリカ"
    ];

    const ivent_1018 = [
        "四半期国内総生産",
        "小売売上高",
        "ZEW景況感調査",
        "鉱工業生産",
        "ゴールドマン・サックス・グループ",
        "ネットフリックス"
    ];

    const ivent_1019 = [
        "SBIシーリングサービス",
        "消費者物価指数",
        "小売物価指数",
        "消費者物価指数",
        "住宅着工件数",
        "米地区連銀経済報告",
        "IBM",
        "ラムリサーチ",
        "プロクター・アンド・ギャンブル"
    ];

    const ivent_10 = [
        ivent_1017,ivent_1018,ivent_1019
    ];



    let ivent_num = 0;
    let ivent_miss = false;
    //イベントが正しく記入されている日数を検出
    for(i=0;i < ivent_10.length;i++){
        if(text.indexOf(ivent_date[i]) == -1) continue; //日付が記入されていなければスキップ
        ivent_num++;
        for(j=0;j < ivent_10[i].length;j++){
            if(text.indexOf(ivent_10[i][j]) == -1){
                //記入イベントに間違いがある(1回のみ)
                if(!ivent_miss)    B2_ivent_mistake();
                ivent_miss = true;
            }
        }
    }
    //イベントが正しく記入されている日数に応じてパラメータ変動
    B2_ivent_input(ivent_num);

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
    let rate_miss = false;
    //正しく記入されているレート数を検出
    for(i in keyword){
        if(text.indexOf(i) != -1){
            if(text.indexOf(keyword[i]) != -1){
                console.log(i+keyword[i]);
                rate_num++;
            }else{
                //記入レートの数値に間違いがある(1回のみ)
                if(!rate_miss)    B1_rate_num();
                rate_miss = true;
            }
        }
    }
    console.log(rate_num);
    //正しく記入されているレート数に応じてパラメータ変動
    B1_rate_input(rate_num);

}

/**
 * 1128メモ
 * ・レートやイベントが0個のときの処理について
 * ・不要な書き込みの定義について
 * ・保存終了のたびに採点が行われる
 */