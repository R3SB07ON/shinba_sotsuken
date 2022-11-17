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
    let A_OK_mail = Number(localStorage.getItem("A_OK_mail")) + 1;
    localStorage.setItem("A_OK_mail",A_OK_mail);
    
    if(A_OK_mail==1)            paramctr([[1,-2],[2,-2],[3,-2],[10,-2]]);
    else if(A_OK_mail==2)       paramctr([[1,-3],[2,-3],[3,-3],[10,-3],[11,1]]);
    else                        paramctr([[1,-5],[2,-5],[3,-5],[10,-5],[11,3]]);
}