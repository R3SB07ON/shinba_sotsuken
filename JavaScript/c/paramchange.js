/*
パラメータ一括変動
二次元配列にパラメータをまとめる
例：[[0,5],[1,-25]]
*/
function paramctr(param_bundle){
    for(x = 0;x < param_bundle.length;x++){
        add(param_bundle[x][0],param_bundle[x][1]);
    }
}

//パラメータ変動に関連するローカルストレージのセット（初回のみ）
function setParamChange() {
	if(localStorage.getItem("param_change_first"))	return;
	localStorage.setItem("param_change_first","false");
    
   	localStorage.setItem("A_OK_mail","0");    //良いメールを削除した回数
}

/*
共通
*/
//タスク失敗
function task_failed(task_type){
    switch (task_type){
        case "A":
            paramctr([0,-10],[1,-10],[2,-10],[3,-10],[4,-10],[5,-10],[6,-10],[7,-10],[8,-10],[9,-10],[10,-10]);
        case "A1":
            paramctr([0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5]);
        case "A2":
            paramctr([0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5]);
        case "A21":
            paramctr([0,-3],[1,-3],[2,-3],[3,-3],[4,-3],[5,-3],[6,-3],[7,-3],[8,-3],[9,-3],[10,-3]);
        case "B":
            paramctr([0,-10],[1,-10],[2,-10],[3,-10],[4,-10],[5,-10],[6,-10],[7,-10],[8,-10],[9,-10],[10,-10]);
        case "B1":
            paramctr([0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5]);
        case "B2":
            paramctr([0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5]);
        case "C":
            paramctr([0,-10],[1,-10],[2,-10],[3,-10],[4,-10],[5,-10],[6,-10],[7,-10],[8,-10],[9,-10],[10,-10]);
        case "X":
            paramctr([0,-3],[1,-3],[2,-3],[3,-3],[4,-3],[5,-3],[6,-3],[7,-3],[8,-3],[9,-3],[10,-3]);
        }
}

/*
A
*/
//良いメールを削除
function A_OK_mail_del(){
    let A_OK_mail = Number(Number(localStorage.getItem("A_OK_mail"))) + 1;
    localStorage.setItem("A_OK_mail",A_OK_mail);
    if(A_OK_mail==1)            paramctr([[1,-2],[2,-2],[3,-2],[10,-2]]);
    else if(A_OK_mail==2)       paramctr([[1,-3],[2,-3],[3,-3],[10,-3],[11,1]]);
    else                        paramctr([[1,-5],[2,-5],[3,-5],[10,-5],[11,3]]);
}

//良いメールをゴミ箱から戻す
function A_OK_mail_recovery(){
    //専用のローカルストレージ作成
    //let A_OK_mail = Number(Number(localStorage.getItem("A_OK_mail"))) + 1;
    //localStorage.setItem("A_OK_mail",A_OK_mail);
    if(A_OK_mail==1)            paramctr([[1,1],[2,1],[3,1],[10,1]]);
    else if(A_OK_mail==2)       paramctr([[1,2],[2,2],[3,2],[10,2]]);    
}

//2分以内に完了
function A_task_2min_finish(){
    paramctr([[5,1]]);
}

//迷惑メールのリンクを踏む
function A_spam_link_click(){
    paramctr([[0,-3],[1,-3],[2,-3],[6,-3],[7,-8],[8,-8]]);
}

//ゴミ箱から難易度〇の迷惑メールを戻す
function A_spam_recovery(difficulty){
    switch (difficulty){
        case 1:
            paramctr([[1,-1],[2,-1],[6,-1],[7,-1],[8,-1]]);
        case 2:
            paramctr([[1,-2],[2,-2],[6,-2],[7,-2],[8,-2]]);
        case 3:
            paramctr([[1,-3],[2,-3],[6,-3],[7,-3],[8,-3]]);
        case 4:
            paramctr([[1,-4],[2,-4],[6,-4],[7,-4],[8,-4]]);
    }
}

//難易度〇の迷惑メールを消す
function A_spam_trash(difficulty){
    switch (difficulty){
        case 1:
            paramctr([[1,2],[2,2],[6,2],[7,2],[8,2]]);
        case 2:
            paramctr([[1,3],[2,3],[6,3],[7,3],[8,3]]);
        case 3:
            paramctr([[1,4],[2,4],[6,4],[7,4],[8,4]]);
        case 4:
            paramctr([[1,5],[2,5],[6,5],[7,5],[8,5]]);
    }
}

//ゴミ箱からなりすましメールを戻す
function A_narisumashi_recovery(){
    paramctr([[0,-2],[1,-2],[2,-2],[3,-3],[6,-2],[7,-2],[8,-3]]);
}

//なりすましメールを消す
function A_narisumashi_trash(){
    paramctr([[0,3],[1,3],[2,3],[3,4],[6,3],[7,3],[8,4]]);
}

/*
A-1
 */
//送信先を間違える
function A1_to_mistake(){
    paramctr([[0,-10],[1,-10],[3,-10],[7,-10],[9,-10]]);
}

//返信メールの日付にミス
function A1_date_mistake(){
    paramctr([[0,-1],[1,-1],[3,-1],[4,-8],[5,-1],[6,-1],[10,-1]]);
}

//返信メールのミス（送信者の会社名/部署名/名前、自分の会社名/部署名/名前）
function A1_res_mistake(){
    paramctr([[0,-1],[1,-1],[3,-1],[5,-1],[6,-1],[10,-1]]);
}

/*
A-2
*/
//パスワードを付ける資料を間違える
function A2_doc_mistake(){
    paramctr([[0,-1],[1,-1],[3,-1]]);
}

//使用文字が1、2種類だけのPWで完了
function A2_pass_type(pass){
    //パスワードの文字種類を計算
    //let type;
    if(type==1)         paramctr([[0,-10],[3,-10],[6,-10],[7,-10],[10,-10]]);
    else if(type>=2){
        if(type==2) paramctr([[0,-5],[3,-5],[6,-5],[7,-5],[10,-5]]);
        A2_pass_kigou(pass);
    }
}

//記号を使用
function A2_pass_kigou(pass){
    if(pass){           //大文字、小文字、数字、記号を全部
        paramctr([[0,1],[3,1],[5,1],[6,1],[7,1],[10,1]]);
    }else if(pass){     //記号のどれかを使用
        paramctr([[0,1],[3,1],[6,1],[7,1],[10,1]]);
    }
}

//再入力を3回以上失敗
function A2_pass_retry_failed(){
    paramctr([[0,-3],[1,-3],[3,-3],[6,-3],[7,-3],[11,1]]);
}

//文字数が8字未満or30以上
function A2_pass_length(pass_length){
    if(pass_length < 8 || 30 <= pass_length){
        paramctr([[0,-4],[3,-4],[5,-4],[6,-4],[7,-4],[10,-4],[11,1]]);
    }
}

//1分以内に完了
function A2_1min_finish(){
    paramctr([[5,1]]);
}

/*
A-2-1
*/
//aiueo株式会社が送信先以外に入っている

//aiueo株式会社が送信先に入っていない

//stockmoney株式会社がBCC以外に入っている

//stockmoney株式会社がBCCに入っていない

//BCCに意図しないアドレスが入っている

//CCに意図しないアドレスが入っている

//projectXXの資料を編集
function A21_projectXX_edit(){
    paramctr([[5,-8],[6,-1],[7,-8],[9,-8],[11,5]]);
}

//添付する資料を間違えたまま送信
function A21_doc_send_mistake(){
    paramctr([[0,-1],[1,-1],[3,-1],[5,-1],[7,-5],[8,-8],[5,-9],[11,1]]);
}

//A-2で設定したパスワードが送信されていない
function A21_pass_send_failed(){
    paramctr([[4,-5],[6,-2],[7,-2],[10,-2]]);
}

/*
B-1
*/
//レートの記入数が少ない
function B1_rate_input(rate){
    switch(rate){
        case 1:
            paramctr([[1,-10],[3,-10],[5,-10],[7,-10],[8,-10]]);
        case 2:
            paramctr([[1,-7],[3,-7],[5,-7],[7,-7],[8,-7]]);
        case 3:
            paramctr([[1,-4],[3,-4],[5,-4],[7,-4],[8,-4]]);
        case 4:
            paramctr([[1,-2],[3,-2],[5,-2],[7,-2],[8,-2]]);
        case 5:
            paramctr([[1,-1],[3,-1],[5,-1],[7,-1],[8,-1]]);
    }
}

//記入レートの数値に間違い
function B1_rate_num(){
    paramctr([[1,-2],[3,-2],[4,-3],[5,-2],[7,-2],[8,-2]]);
}

//ExchangeRateに不要な書き込み
function B1_ExchangeRate_edit(){
    paramctr([[1,-2],[3,-2],[5,-2],[8,-5],[11,1]]);
}

//ExchangeRate以外の資料に書き込み
function B1_except_edit(){
    paramctr([[1,-2],[3,-2],[5,-2],[9,-5],[11,1]]);
}

//悪いサイトにアクセス
function B1_access_bad_page(){
    paramctr([[0,-10],[2,-9],[3,-1],[6,-2],[7,-3][8,-8],[9,-10],[11,5]]);
}

//404が出たら（共通？）
function B1_access_404_page(){
    paramctr([[0,-4],[2,-4],[5,-8],[6,-6],[7,-4][8,-4],[11,10]]);
}

//検索画面で株価以外を調べる（共通？）
function B1_access_except_page(){
    paramctr([[1,-4],[5,-4],[11,5]]);
}

/*
B-2
*/
//イベントの記入数が少ない
function B2_ivent_input(ivent){
    switch(ivent){
        case 1:
            paramctr([[1,-5],[3,-5],[5,-5],[7,-5],[8,-5]]);
        case 2:
            paramctr([[1,-2],[3,-2],[5,-2],[7,-2],[8,-2]]);
    }
}

//イベントに記入漏れ
function B2_ivent_mistake(){
    paramctr([[1,-2],[3,-2],[5,-2],[7,-2],[8,-2]]);
}

//誤字
function B2_typo(){
    paramctr([[1,-1]]);
}

//資料に不要な書き込み
function B2_doc_edit(){
    paramctr([[1,-1],[3,-1],[5,-1],[11,1]]);
}

//10_Company以外の資料に書き込み
function B2_doc_except_edit(){
    paramctr([[1,-1],[3,-1],[5,-1],[11,1]]);
}

/*
C
*/
//メーリングリストアドレスが送信先以外に入っている
function C_to_mistake(){
    paramctr([[0,-8],[1,-8],[2,-8],[3,-8],[5,-5]]);
}

//メーリングリストアドレスを間違えている
function C_mailinglist_address_mistake(){
    paramctr([[0,-10],[1,-10],[2,-8],[3,-10],[5,-5],[6,-8],[7,-10]]);
}

//BCCにアドレスが入っている
function C_BCC_address_insert(){
    paramctr([[0,-8],[1,-8],[2,-8],[3,-8],[7,-10],[9,-10]]);
}

//CCにアドレスが入っている
function C_CC_address_insert(){
    paramctr([[0,-8],[1,-8],[2,-8],[3,-8],[7,-10],[9,-10]]);
}

//資料が添付されている
function C_doc_attached(){
    paramctr([[0,-1],[1,-1],[3,-3],[5,-5],[7,-5],[8,-8],[9,-9],[11,1]]);
}

//2分以内に完了
function C_2min_finish(){
    paramctr([[5,1]]);
}

/*
X
*/
