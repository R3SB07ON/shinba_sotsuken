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
