/*
	メール一覧画面、ゴミ箱画面で使用
	11/7作成（大野）
*/


//メールの件名
//この配列をもとにローカルストレージで受信/ゴミ箱状態を管理する
let mailList = new Array(	"セキュリティ講座の見積書について",
							"貴社訪問のお願い",
							"お振込受付のお知らせ",
							"＜重要＞ご利用確認のお願い",
							"定休日の変更について",
							"北野海道様からのご紹介 株式会社ウォルトエンジン 遊園 大地",
							"ウイルス感染について",
							"会議開催通知 情報しんば",
							"友達にプレミアを贈ろう！",
							"カードお届け直前のご案内",
							"打合せ日程の件について",
							"なし",
							"請求書の件"							
						);

//迷惑メール「1」普通のメール「0」
let mail_judge = new Array(0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1);

//メール管理状態の初期化（初回のみ実行）
function setMailParam() {
	if(localStorage.getItem("mail_first"))	return;
	localStorage.setItem("mail_first","false")
	for (let i = 0; i < mailList.length; i++) {
   		localStorage.setItem(mailList[i],'inbox');
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
		if(localStorage.getItem(mailList[i]) != type) continue;
		table.innerHTML += 	'<tr id="tr'
						+	i
						+	'"><td><a href="mbrowse.html">'
						+	mailList[i]
						+	'</a><button type="button" class="aaa" onclick="trashOrRecoveryClick(\''
						+	mailList[i]
						+	'\',\''
						+	buttontype
						+	'\')">'
						+	buttonname
						+	'</button></td></tr>';
	}
	
}


//メールをゴミ箱に移動・復元
function trashOrRecoveryClick(key,type) {
	if(type == "trash"){
		localStorage.setItem(key,'trash');
	}else if(type == "recovery"){
		localStorage.setItem(key,'inbox');
	}
	tr = document.getElementById("tr"+ mailList.indexOf(key));
	tr.remove();
}