/*
	メール一覧画面、ゴミ箱画面で使用
	11/7作成（大野）
*/


//メール
//[種別,件名]の二次元で記憶（0:良、1:悪）
//この配列をもとにローカルストレージで受信/ゴミ箱状態を管理する
const mailList = [
	[0,"セキュリティ講座の見積書について"],
	[0,"貴社訪問のお願い"],
	[1,"お振込受付のお知らせ"],
	[1,"＜重要＞ご利用確認のお願い"],
	[0,"定休日の変更について"],
	[0,"北野海道様からのご紹介 株式会社ウォルトエンジン 遊園 大地"],
	[0,"ウイルス感染について"],
	[1,"会議開催通知 情報しんば"],
	[0,"友達にプレミアを贈ろう！"],
	[0,"カードお届け直前のご案内"],
	[0,"打合せ日程の件について"],
	[1,"なし"],
	[1,"請求書の件"]
];

//迷惑メール「1」普通のメール「0」
let mail_judge = new Array(0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1);

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
		if(localStorage.getItem(mailList[i][1]) != type) continue;
		table.innerHTML += 	'<tr id="tr'
						+	i
						+	'"><td><a href="mbrowse.html">'
						+	mailList[i][1]
						+	'</a><button type="button" class="aaa" onclick="trashOrRecoveryClick(\''
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
		//良いメールを削除した場合減点
		if(mailList[arr_key][0] == 0)	A_OK_mail_del();
	}else if(type == "recovery"){
		localStorage.setItem(key,'inbox');
	}
	tr = document.getElementById("tr"+ arr_key);
	tr.remove();
}