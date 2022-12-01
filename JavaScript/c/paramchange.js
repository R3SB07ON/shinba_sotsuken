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

//タスク完了状態の判断
//引数はtask.jsのtaskListの値に準ずる
function task_check(task_type){
    let state = stateCheck(task_type);
    //console.log(state);
    if(state == "未完了" || state == "失敗"){
        return true;
    }else{
        return false;
    }
}

/*
共通
*/
//タスク失敗
function task_failed(task_type){
    switch (task_type){
        case "A":
            paramctr([0,-10],[1,-10],[2,-10],[3,-10],[4,-10],[5,-10],[6,-10],[7,-10],[8,-10],[9,-10],[10,-10]);
            break;
        case "A-1":
            paramctr([0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5]);
            break;
        case "A-2":
            paramctr([0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5]);
            break;
        case "A-2-1":
            paramctr([0,-3],[1,-3],[2,-3],[3,-3],[4,-3],[5,-3],[6,-3],[7,-3],[8,-3],[9,-3],[10,-3]);
            break;
        case "B":
            paramctr([0,-10],[1,-10],[2,-10],[3,-10],[4,-10],[5,-10],[6,-10],[7,-10],[8,-10],[9,-10],[10,-10]);
            break;
        case "B-1":
            paramctr([0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5]);
            break;
        case "B-2":
            paramctr([0,-5],[1,-5],[2,-5],[3,-5],[4,-5],[5,-5],[6,-5],[7,-5],[8,-5],[9,-5],[10,-5]);
            break;
        case "C":
            paramctr([0,-10],[1,-10],[2,-10],[3,-10],[4,-10],[5,-10],[6,-10],[7,-10],[8,-10],[9,-10],[10,-10]);
            break;
        case "X":
            paramctr([0,-3],[1,-3],[2,-3],[3,-3],[4,-3],[5,-3],[6,-3],[7,-3],[8,-3],[9,-3],[10,-3]);
            break;
        }
}

/*
A
*/

//良いメールを削除
function A_OK_mail_del(){
    if(!task_check("0")){
        Z_OK_mail_trash();
        return;
    }
    let A_OK_mail = Number(Number(localStorage.getItem("A_OK_mail"))) + 1;
    localStorage.setItem("A_OK_mail",A_OK_mail);
    if(A_OK_mail==1)            paramctr([[1,-2],[2,-2],[3,-2],[10,-2]]);
    else if(A_OK_mail==2)       paramctr([[1,-3],[2,-3],[3,-3],[10,-3],[11,1]]);
    else                        paramctr([[1,-5],[2,-5],[3,-5],[10,-5],[11,3]]);
}

//良いメールをゴミ箱から戻す
function A_OK_mail_recovery(){
    if(!task_check("0"))  return;
    //専用のローカルストレージ作成
    //let A_OK_mail = Number(Number(localStorage.getItem("A_OK_mail"))) + 1;
    //localStorage.setItem("A_OK_mail",A_OK_mail);
    if(A_OK_mail==1)            paramctr([[1,1],[2,1],[3,1],[10,1]]);
    else if(A_OK_mail==2)       paramctr([[1,2],[2,2],[3,2],[10,2]]);    
}

//2分以内に完了
function A_task_2min_finish(){
    if(!task_check("0"))  return;
    paramctr([[5,1]]);
}

//迷惑メールのリンクを踏む
function A_spam_link_click(){
    if(!task_check("0")){
        Z_NG_link_click();
        return;
    }
    paramctr([[0,-3],[1,-3],[2,-3],[6,-3],[7,-8],[8,-8]]);
}

//ゴミ箱から難易度〇の迷惑メールを戻す
function A_spam_recovery(difficulty){
    if(!task_check("0"))  return;
    switch (difficulty){
        case 1:
            paramctr([[1,-1],[2,-1],[6,-1],[7,-1],[8,-1]]);
            break;
        case 2:
            paramctr([[1,-2],[2,-2],[6,-2],[7,-2],[8,-2]]);
            break;
        case 3:
            paramctr([[1,-3],[2,-3],[6,-3],[7,-3],[8,-3]]);
            break;
        case 4:
            paramctr([[1,-4],[2,-4],[6,-4],[7,-4],[8,-4]]);
            break;
    }
}

//難易度〇の迷惑メールを消す
function A_spam_trash(difficulty){
    if(!task_check("0")){
        Z_spam_trash();
        return;
    }
    switch (difficulty){
        case 1:
            paramctr([[1,2],[2,2],[6,2],[7,2],[8,2]]);
            break;
        case 2:
            paramctr([[1,3],[2,3],[6,3],[7,3],[8,3]]);
            break;
        case 3:
            paramctr([[1,4],[2,4],[6,4],[7,4],[8,4]]);
            break;
        case 4:
            paramctr([[1,5],[2,5],[6,5],[7,5],[8,5]]);
            break;
    }
}

//ゴミ箱からなりすましメールを戻す（ボツ）
function A_narisumashi_recovery(){
    if(!task_check("0"))  return;
    paramctr([[0,-2],[1,-2],[2,-2],[3,-3],[6,-2],[7,-2],[8,-3]]);
}

//なりすましメールを消す(ボツ)
function A_narisumashi_trash(){
    if(!task_check("0"))  return;
    paramctr([[0,3],[1,3],[2,3],[3,4],[6,3],[7,3],[8,4]]);
}

/*
A-1
 */
//送信先を間違える
function A1_to_mistake(){
    //if(!task_check("1"))  return;
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
（Xと共通）
*/
//パスワードを付ける資料を間違える（独立）
function A2_doc_mistake(){
    paramctr([[0,-1],[1,-1],[3,-1]]);
}

//使用文字が1、2種類だけのPWで完了
function A2_pass_type(type){
    if(type==1)         paramctr([[0,-10],[3,-10],[6,-10],[7,-10],[10,-10]]);
    else if(type==2)    paramctr([[0,-5],[3,-5],[6,-5],[7,-5],[10,-5]]);
}

//記号を使用
//記号使用フラグ（仮）を使用
function A2_pass_kigou(hoge){
    if(hoge){           //大文字、小文字、数字、記号を全部
        paramctr([[0,1],[3,1],[5,1],[6,1],[7,1],[10,1]]);
    }else if(hoge){     //記号のどれかを使用
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
//aiupro株式会社が送信先以外に入っている
function A21_to_except_aiupro(){
    paramctr([[0,-8],[1,-8],[2,-8],[3,-8],[5,-5]]);
}

//aiupro株式会社が送信先に入っていない
function A21_to_not_aiupro(){
    paramctr([[0,-3],[1,-8],[2,-1],[3,-5],[4,-8],[5,-1]]);
}

//stockmoney株式会社がBCC以外に入っている
function A21_BCC_except_stockmoney(){
    paramctr([[0,-8],[1,-8],[2,-8],[3,-8],[5,-5],[7,-10]]);
}

//stockmoney株式会社がBCCに入っていない
function A21_BCC_not_stockmoney(){
    paramctr([[0,-8],[1,-8],[2,-8],[3,-8],[4,-8],[5,-7]]);
}

//BCCに意図しないアドレスが入っている
function A21_BCC_unintentional(){
    paramctr([[0,-8],[1,-8],[2,-8],[3,-8],[7,-10],[9,-10]]);
}

//CCに意図しないアドレスが入っている
function A21_CC_unintentional(){
    paramctr([[0,-8],[1,-8],[2,-8],[3,-8],[7,-10],[9,-10]]);
}

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
    if(!task_check("5"))  return;
    switch(rate){
        case 1:
            paramctr([[1,-10],[3,-10],[5,-10],[7,-10],[8,-10]]);
            break;
        case 2:
            paramctr([[1,-7],[3,-7],[5,-7],[7,-7],[8,-7]]);
            break;
        case 3:
            paramctr([[1,-4],[3,-4],[5,-4],[7,-4],[8,-4]]);
            break;
        case 4:
            paramctr([[1,-2],[3,-2],[5,-2],[7,-2],[8,-2]]);
            break;
        case 5:
            paramctr([[1,-1],[3,-1],[5,-1],[7,-1],[8,-1]]);
            break;
    }
}

//記入レートの数値に間違い
function B1_rate_num(){
    if(!task_check("5"))  return;
    paramctr([[1,-2],[3,-2],[4,-3],[5,-2],[7,-2],[8,-2]]);
}

//ExchangeRateに不要な書き込み
function B1_ExchangeRate_edit(){
    if(!task_check("5"))  return;
    paramctr([[1,-2],[3,-2],[5,-2],[8,-5],[11,1]]);
}

//ExchangeRate以外の資料に書き込み
function B1_except_edit(){
    if(!task_check("5"))  return;
    paramctr([[1,-2],[3,-2],[5,-2],[9,-5],[11,1]]);
}

//悪いサイトにアクセス
function B1_access_bad_page(){
    if(!task_check("5")){
        Z_access_bad_page();
        return;
    }
    paramctr([[0,-10],[2,-9],[3,-1],[6,-2],[7,-3][8,-8],[9,-10],[11,5]]);
}

//404が出たら（B-2共通）
function B1_access_404_page(){
    if(task_check("5") || task_check("6")){
        paramctr([[0,-4],[2,-4],[5,-8],[6,-6],[7,-4][8,-4],[11,10]]);
    }else{
        Z_display_404();
    }
    
}

//検索画面で株価以外を調べる
function B1_access_except_page(){
    if(!task_check("5")){
        Z_task_disrelation_search_news();
        return;
    }
    paramctr([[1,-4],[5,-4],[11,5]]);
}

/*
B-2
*/
//イベントの記入数が少ない
function B2_ivent_input(ivent){
    if(!task_check("6"))  return;
    switch(ivent){
        case 1:
            paramctr([[1,-5],[3,-5],[5,-5],[7,-5],[8,-5]]);
            break;
        case 2:
            paramctr([[1,-2],[3,-2],[5,-2],[7,-2],[8,-2]]);
            break;
    }
}

//イベントに記入漏れ
function B2_ivent_mistake(){
    if(!task_check("6"))  return;
    paramctr([[1,-2],[3,-2],[5,-2],[7,-2],[8,-2]]);
}

//誤字
function B2_typo(){
    if(!task_check("6"))  return;
    paramctr([[1,-1]]);
}

//資料に不要な書き込み
function B2_doc_edit(){
    if(!task_check("6"))  return;
    paramctr([[1,-1],[3,-1],[5,-1],[11,1]]);
}

//10_Company以外の資料に書き込み
function B2_doc_except_edit(){
    if(!task_check("6"))  return;
    paramctr([[1,-1],[3,-1],[5,-1],[11,1]]);
}


//検索画面でニュース以外を調べる
function B2_access_except_page(){
    if(!task_check("6")){
        Z_task_disrelation_search_news();
        return;
    }
    paramctr([[1,-4],[5,-4],[11,5]]);
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
A-2とほぼ共通
*/

/*
Z
*/
//悪いサイトにアクセス
function Z_access_bad_page(){
    paramctr([[0,-5],[2,-6],[3,-1],[6,-1],[7,-1],[8,-4],[9,-5],[11,2]]);
}

//一度に2つ以上の完了報告をする
function Z_task_report(num=0){
    switch(num){
        case 0:
        case 1:
            break;
        case 2:
            paramctr([[4,-2],[5,-2]]);
            break;
        case 3:
            paramctr([[4,-6],[5,-2]]);
            break;
        case 4:
            paramctr([[4,-8],[5,-2]]);
            break;
        default:
            paramctr([[4,-10],[5,-2]]);
            break;
    }
}

//業務に関係ない広告メールのリンクをクリック
function Z_spam_mail_click(){
    paramctr([[0,-3],[2,-8],[6,-5],[9,-8],[11,8]]);
}

//制限時間内に終わらない
function Z_time_over(){
    paramctr([[5,-1]]);
}

//タスクが終わっていない状況でシャットダウン、再起動、更新
function Z_unfinished_shutdown(){
    paramctr([[5,-10],[11,10]]);
}

//不正なリンク、ファイルを開く
function Z_NG_link_click(){
    paramctr([[2,-5],[7,-5],[8,-5],[10,-5],[11,6]]);
}

//タスクと関係ない時検索画面で株価とニュース以外を調べる
function Z_task_disrelation_search(){
    if(task_check("5") || task_check("6"))  return;
    paramctr([[1,-6],[5,-6],[6,-5],[11,6]]);
}

//タスクと関係ない時検索画面で株価とニュースを調べる(Z)
function Z_task_disrelation_search_news(){
    paramctr([[1,-2],[5,-2],[11,3]]);
}

//良いメールを消す(Z)
function Z_OK_mail_trash(){
    paramctr([[1,-2],[2,-2],[3,-2],[11,2]]);
}

//404が出る(Z)
function Z_display_404(){
    paramctr([[0,-2],[2,-2],[5,-4],[6,-3],[7,-2],[8,-2],[11,5]]);
}

//タスクに関係ないタイミングでパスワード編集
function Z_pass_edit(){
    paramctr([[0,-5],[11,5]]);
}

//タスクの指示に関係なくメール返信
function Z_mail_disrelation_res(){
    paramctr([[0,-8],[1,-8],[5,-10],[11,10]]);
}

//資料に不要な書き込み
function Z_doc_edit(){
    paramctr([[1,-1],[3,-1],[5,-1],[11,1]]);
}

//メールをゴミ箱から戻した
function Z_mail_recovery(){
    paramctr([[0,-1],[1,-1],[2,-1],[7,-1],[11,1]]);
}

//タスクで使わない編集可能ファイルの内容を勝手に消す
function Z_doc_delete(){
    paramctr([[5,-4],[6,-1],[7,-4],[9,-4],[11,3]]);
}

//タスクがすべて完了したうえでOSを更新
function Z_task_finished_update(){
    paramctr([[0,2],[3,2],[5,5],[6,5],[7,2]]);
}

//難易度〇の迷惑メールを1個消す（Z）
function Z_spam_trash(difficulty){
    switch (difficulty){
        case 1:
            paramctr([[1,1],[2,1],[6,2],[7,2],[8,2]]);
            break;
        case 2:
            paramctr([[1,2],[2,2],[6,3],[7,3],[8,3]]);
            break;
        case 3:
            paramctr([[1,3],[2,3],[6,4],[7,4],[8,4]]);
            break;
        case 4:
            paramctr([[1,4],[2,4],[6,5],[7,5],[8,5]]);
            break;
    }
}