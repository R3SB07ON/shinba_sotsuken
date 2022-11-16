let from = new Array(	"aiupro@tmail.com",
						"stockmoney@ois.com",
						"info-viking@musi.ac.jp",
						"info@sentosa601.vjp",
						"hokkaijoho-svk@lmail.com",
						"waltengine@dsn.ac.rjp",
						"ocs-systemsinfo.oc.jp",
						"ojs-system.ac.gjp",
						"spotify-info.agc.jp ",
						"myinfo.rakuten.tc.ajp",
						"muramoto-drive.ac.com",
						"info-anmboan.ac.jp",
						"uttbom-anbf.aw.jp"	

);

let file = {0:"【見積書】ocsしんば株式会社.pdf"};

let mail_text = new Array(	"お世話になっております。\
                            aiupro株式会社の江尾太郎です。<br><br>\
                            先月ご依頼いただいた見積書を添付にてお送りいたします。<br><br> \
                            <研修概要> <br>\
                            内容：セキュリティ講座<br> \
                            日時：2022年〇〇月〇〇日13時30分～15時（1時間半） <br>\
                            場所：aiupro株式会社　会議室<br> \
                            住所：大阪府東成区〇〇町1-2-3 <br>\
                            人数：30名 <br><br>\
                            ご不明な点やご質問がございましたら、お気軽にご連絡ください。<br>\
                            ご確認よろしくお願いいたします。 <br><br>\
                            ****************************************************** <br>\
                            aiupro株式会社 <br>\
                            第一営業部　江尾　太郎<br>\
                            　　Mail:aiupro@tmail.com </br>\
                            〒123-4567　大阪府東成区〇〇町1-2-3<br>\
                            　TEL:0123-〇〇〇〇-〇〇〇〇 ",

							"株式会社ocsしんば<br>\
                            営業部　しんば太郎　様<br><br>\
                            ご丁寧にご連絡くださいまして、誠にありがとうございます。<br><br> \
                            さて、ご訪問の件につき承知いたしました。私も今回のサービスに関して大変興味があり、ぜひお話を伺いたく存じます。 <br>\
                            なお、今秋ですと以下の日時ではご都合いかがでしょう。<br><br>\
                            1．11月10日　16：00～18：00<br>\
                            2．11月11日　10：00～12：00 <br>\
                            3．11月13日　終日 <br><br>\
                            大変お手数ではございますが、お取り計らいのほど何卒よろしくお願いいたします。<br><br>\
                            ******************************************************<br>\
                            stockmoney株式会社<br>\
                            営業部　ノマド<br>\
                            　　Mail:stockmoney@ois.com <br>\
                            〒123-4567　東京都港区〇〇町1-2-3 <br>\
                            　TEL:0123-〇〇〇〇-〇〇〇〇",

							"",
							"",
							"",
							"",
							"",
							"",
							"",
							"",
							"",
							"",

							"日頃よりお世話になっております。<br>\
                            請求書を確認後、3営業日後の返金となります。<br>\
                            しかしながら、裁きました背急所ですが、3点修正が必要です。 <br>\
                            　① 手数料が反映されておりませんでしたので、請求書に追記ください。<br>\
                            　② 請求書の発行日を記載してください。 <br>\
                            　③ 弊社名は「junba株式会社」です、ご修正お願いします。<br>\
                            請求書到着日より3営業日後の着金となります。 <br>\
                            宜しくお願いいたします。\ "

);

window.onload = onLoad;
function onLoad(){
    document.getElementById("title").innerText = "件名:" + mailList[0];
    document.getElementById("from").innerText = "From:" + from[0];
    document.getElementById("file").innerText = "添付ファイル" + file[0];
    document.getElementById("mail-text").innerHTML = mail_text[1];
}