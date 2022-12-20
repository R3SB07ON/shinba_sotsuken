/*
	メール一覧画面、ゴミ箱画面で使用
	11/7作成（大野）
*/


//メール
//[種別,件名]の二次元で記憶（0:良、1～4悪（数値は難易度））
//この配列をもとにローカルストレージで受信/ゴミ箱状態を管理する
/*
mdata.jsに移行
*/


//メール管理状態の初期化（初回のみ実行）
function setMailParam() {
	if(localStorage.getItem("mail_first"))	return;
	localStorage.setItem("mail_first","false")
	for (let i = 0; i < mailList.length; i++) {
   		localStorage.setItem(mailList[i][1],'inbox');
	}
}

//メール一覧、ゴミ箱画面に対象のメールを挿入
function mailSet(type){
	table = document.getElementById("mailTable");
	
	//それぞれの画面で対応するボタンを設定する
	let buttontype;
	let buttonname;
	if(type == "inbox"){
		buttontype = "trash";
		buttonname = "削除";
	}else if(type == "trash"){
		buttontype = "recovery";
		buttonname = "復元";
	}
	
	//受信・ゴミ箱状態をローカルストレージで確認してメールを配置
	for(i = 0;i < mailList.length;i++){
		let file_icon = "";
		if(localStorage.getItem(mailList[i][1]) != type) continue;
		//添付ファイルがある場合アイコンを配置
		if(file[i] != null)	file_icon = "📎";
		else				file_icon = "";
		table.innerHTML += 	'<tr id="tr'
						+	i
						+	'"><td><a href="mbrowse.html?'
						+	i
						+	'">'
						+	'<font size = "4">'
						+	from[i]
						+	'<br></font>'
						+	mailList[i][1]
						+	file_icon
						+	'</a>'
						+	'<button type="button" class="aaa" onclick="trashOrRecoveryClick(\''
						+	mailList[i][1]
						+	'\',\''
						+	buttontype
						+	'\')">'
						+	buttonname
						+	'</button></td></tr>';
	}
	
}


//メールをゴミ箱に移動・復元
function trashOrRecoveryClick(key,type) {
	//配列検索用
	let arr_key = mailList.findIndex( item => item[ 1 ]===key );

	if(type == "trash"){
		localStorage.setItem(key,'trash');

		//A：良いメールを削除した場合減点
		if(mailList[arr_key][0] == 0)	A_OK_mail_del();

		//A：難易度〇の迷惑メールを消す
		if(mailList[arr_key][0] >= 1){
			A_spam_trash(mailList[arr_key][0]);
			A_complete_judge();		//タスク完了判定
		}

	}else if(type == "recovery"){
		localStorage.setItem(key,'inbox');

		//A：難易度〇の迷惑メールをゴミ箱から戻す
		if(mailList[arr_key][0] >= 1)	A_spam_recovery(mailList[arr_key][0]);

		//A:ゴミ箱から良いメールを戻す
		if(mailList[arr_key][0] == 0)	A_OK_mail_recovery();

		//Z：メールをゴミ箱から戻す
		Z_mail_recovery();
	}
	tr = document.getElementById("tr"+ arr_key);
	tr.remove();
}

//タスクAの成否判定
function A_complete_judge(){
	if(!task_check("0"))	return;
	//すべての迷惑メールがゴミ箱にあれば完了
	for(i=0;i < spam_mail_list.length;i++){
		if(localStorage.getItem(spam_mail_list[i]) != "trash")	return;
		stateChange(0,2);
	}
}