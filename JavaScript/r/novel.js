
const testmsg = [
    "+0,2",
    "+1,2",
    "+2,2",
    "+3,2",
    "+4,2",
    ":0_0_1",
    ":1_1_1",
    "テスト用メッセージ",
    "p",
    "*終了_end"
];


//バックログ用配列
let backlog = [];

//ウインドウに表示するメッセージは「scenario.js」内の配列から持ってくる
let msg = prologue;
let num = 0;        //メッセージの行数
let can_click = true;   //クリック無効化用のフラグ

let case7_selection = [];     //case7で選んだ選択肢を格納


//背景、キャラ画像の管理
//パスは「./../../material/image/r/」　実装時に後付けする。
//二次元配列に格納。["キャラクター","表情"]で管理する。
//[0][0]は空白。キャラクターを取り除きたいとき用。
//0:背景　1：男A（高橋）　2：男B（阿部）　3：男C(原課長)　4：その他人物（清平など）　5：小道具
let img_src = [
                ["","room_office_normal.png","computer_data_center.png","bg_natural_sky.jpg","bg_chiheisen_brown.jpg",
                    "room_living_normal.png","city_night_yoruno_machi.png"],
                ["taka_0_normal.png","taka_1_angry.png","taka_2_laugh.png","taka_3_shock.png","taka_4_tehe.png",
                    "taka_5_surprise.png","taka_6_think.png","taka_7_cry.png"],
                ["abe_0_smile.png","abe_1_laugh.png","abe_2_cry.png"],
                ["hara_0_smile.png","hara_1_laugh.png","hara_2_surprise.png"],
                ["business_suit_bad.png","job_call_center2.png","icon_business_man15.png"],
                ["computer_desktop_bad.png","computer_harddisk.png","computer_harddisk_broken.png","computer_laptop.png","network_icon_2g.png",
                    "ronsomware.png","usb_memory_stick.png"]
];
let img_src_num = 0;

//効果音の管理。パスは「./../../material/music/r/」　画像と同じく後付け。
let audio_src = [
    "type.mp3","glass.mp3","scene.mp3","beep.mp3","phone.mp3","phone2.mp3"
];

//クリックごとに画像切り替え、効果音、本文表示、選択肢の表示を行う。
function MouseClick(){
    //クリックが有効フラグのチェック。ここか選択肢表示時にクリックを無効化。SetMsgを実行すると解除。
    if (can_click == false) return;
    can_click = false;

    //画像切り替え前に終了状態か確認
    if (num+1 >= msg.length)  return;

    //パラメータ増加処理
    while(msg[num].charAt(0)=='+'){
        //「+」を取り除いてからsplitで区切り文字を指定
        //["パラメータ種別","増加値"]の配列を作る
        let param_array = msg[num].substring(1).split(",");
        add(Number(param_array[0]),Number(param_array[1]));
        num++;
    }

    //画像差し替え指示を取得
    let set_img_array = "";
    while(msg[num].charAt(0)==':'){
        //「:」を取り除いてからsplitで区切り文字を指定
        //["背景(0)左(1)右(2)中央ウインドウ(3)の位置指定","差し替え先のキャラクター番号","キャラクターの差分番号"]の配列を作る
        set_img_array = msg[num].substring(1).split("_");
        //それをキャラ差し替えの関数へ送る(整数変換して)
        SetCharacter(Number(set_img_array[0]),Number(set_img_array[1]),Number(set_img_array[2]));
    
        num++;
    }

    //効果音処理を取得
    let set_SE_no = "";
    while(msg[num].charAt(0)=='@'){
        //「@」を取り除く
        set_SE_no = msg[num].substring(1);
        //効果音の関数へ送る(整数変換して)
        PlaySE(Number(set_SE_no));
        num++;
    }

    //メッセージを表示
    SetMsg();

    //選択肢チェック前に終了状態か確認
    if (num+1 > msg.length)  return;
    if (msg[num].charAt(0)=='*'){
        SetChoice();
        return;     //選択肢がある場合はスキップ処理を行わない
    } 

    //テキストスキップ処理
    if(msg[num].charAt(0)=='#'){
        //スキップの関数へ送る
        MsgSkip(msg[num]);
    }

}

//画面上にテキスト表示
function SetMsg(){

    let i = 0;

    //メッセージウインドウのリセット
    document.getElementById("str1").textContent= "";
    document.getElementById("str2").textContent= "";
    document.getElementById("str3").textContent= "";


   // for(i = 0;i < 3;i++){
    //区切り（p）が来るまで繰り返す
    while(msg[num+i] != "p"){
        document.getElementById("str" + String(i+1) ).textContent= msg[num + i];
        backlog.push(msg[num+i]);
        i++;
    }

    //"p"の分も含め行数を加算
    i++;
    num = num + i;
    //最後にクリック制限を解除して終了
    can_click = true;
}

//選択肢の表示
function SetChoice(){
    // id属性で要素を取得
    let window_element = document.getElementById('window');
    //画面のクリック無効化
    can_click = false;
    //選択肢窓を作成、追加
    let choice_window_element = document.createElement("div");
    choice_window_element.setAttribute('id','choice_window');       //IDを設定する
    window_element.after(choice_window_element);

    //選択肢を取得
    let choice_array = "";
    while(num < msg.length && msg[num].charAt(0)=='*'){
        //console.log(msg[num].charAt(0));

        //「*」を取り除いてからsplitで区切り文字を指定
        //["選択肢の文章","ジャンプ先のテキスト"]の配列を作る
        choice_array = msg[num].substring(1).split("_");

        //それを選択肢ボタン生成の関数へ送る
        //ChoiceButtonCriate(choice_array[0],choice_array[1]);
        ChoiceButtonCriate(choice_array[0],choice_array[1],choice_array[2]);
        num++;
    }

}

//選択肢ボタンを生成
function ChoiceButtonCriate(text,jump){
    //console.log(jump);
    // 選択肢窓を取得
    let choice_window_element = document.getElementById('choice_window');
    // 新しいHTML要素（選択肢ボタン）を作成、クリック処理をセット
    let new_element = document.createElement('button');
    new_element.textContent = text;
    //new_element.setAttribute('onclick', 'ButtonPush(this,' + jump + ')');
    new_element.setAttribute('onclick', 'ButtonPush(this,"' + jump + '")');

    // 選択肢窓に挿入
    choice_window_element.appendChild(new_element);
    choice_window_element.innerHTML += "<br>";
}

//選択肢ボタンをクリック
function ButtonPush(button,jump = ""){
    //選択肢ボタンの削除
    button.parentNode.remove();

    /*終了用の処理*/
    if(jump == "end"){
        window.location.href = "../c/result.html?game2"; //遷移
        return;
    }
    /*終了用の処理ここまで*/

    /*case7用の処理（押された選択肢ボタンが「#case7〇」かチェック）*/
    if(jump.indexOf("#case7") != -1){
        //どちらでもメッセージの巻き戻しが必要
        num = 0;
        //同じ選択肢を選んでいたらもどす
        if(case7_selection.indexOf(jump) != -1){
            MsgSkip("#case7overlap");
            can_click = true;
            MouseClick();
            return;
        }else{
            case7_selection.push(jump);     //選んだ選択肢を記憶
            //console.log(case7_selection);
        }
    }
    /*case7用の処理ここまで*/

   //分岐先を指定(#の部分までmsgを進める)
   if(jump.charAt(0) == "#"){
            MsgSkip(jump);
   }else{
        //「#」がなければシナリオチェンジとして別の配列（シナリオ）に飛ぶ
        eval("msg = "+ jump +";");      //evalで配列名を読み込む
        //console.log(msg);
        num = 0;
   }

    can_click = true;
    //その後のメッセージ表示
    MouseClick();
}


//キャラクター画像を差し替える
function SetCharacter(position_no,character_no,character_type_no){
    let position = "";

    if (position_no == 0) {
        position = "window";
    } else if (position_no == 1) {
        position = "character_left";
    } else if (position_no == 2) {
        position = "character_right";
    } else if (position_no == 3){
        position = "center_window";
    }

    let position_element = document.getElementById(position);
   
    //パスをセットして画像差し替え
    //背景の場合は専用の処理
    if(position == "window"){
        position_element.style.backgroundImage = "url(./../../material/image/r/" + img_src[character_no][character_type_no] + ")";
    }else{
        position_element.src = "./../../material/image/r/" + (img_src[character_no][character_type_no]);
    }
     //[0][0]（消去命令）の場合は非表示にする
    if(character_no == 0 && character_type_no == 0){
        position_element.style.visibility = "hidden";
        return;
    }else{
        position_element.style.visibility = "visible";
    }
}

//効果音を再生する
function PlaySE(SE_no){

    let se = document.getElementById("sound-file");     //htmlのaudio要素を取得。ここから音を再生する
    se.src = "./../../material/music/r/" + audio_src[SE_no];                          //そこに引数指定の効果音を挿入する（パスもここでセット）
    se.currentTime = 0;                                 //連続の入力に対応する
    se.play();

}

//バックログを表示する(30行まで)
function ViewBacklog(){
    //console.log(backlog);
    backlog_txt = document.getElementById("backlog_msg");
    backlog_txt.textContent = "";
    let i = backlog.length;
    //console.log(i);
    while(i > 0 && i > backlog.length-30){
        if(backlog[i-1] != undefined){
            backlog_txt.innerHTML = backlog[i-1] + "<br>" + backlog_txt.innerHTML;
        };
        i--;
    }

}

//シナリオ（msg配列）を任意の場所に飛ばす（自動的なスキップ、選択肢分岐）
function MsgSkip(skip_tag){
    skip_tag = "#" + skip_tag;
    //console.log(skip_tag);

    //case7用の処理
    if(skip_tag == "##case7repeat" && case7_selection.length >= 3){
        MsgSkip("#case7end");
        return;
    }


    //ジャンプ先(##XXXXX)が見つかるまでmsgを進める    
    while(num <= msg.length){
        if(msg[num] == skip_tag){
            num++;
            return;
        }
        num++;
    }
}