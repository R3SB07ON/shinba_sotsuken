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

let file = {0:"【見積書】ocsしんば株式会社.pdf", 2:"添付ファイル"};

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

							"※本メールは、セキュリティ強化のため、電子署名をつけてお送りしています。<br><br>\
                            2022年10月25日にお振込みを受付いたしましたので、ご連絡いたします。<br><br>\
                            ■【添付ファイル】<br><br>\
                            本メールは、お取引の受付確認のために送信しております。<br>\
                            送信を中止することはできませんので、あらかじめご了承ください。<br><br>\
                            なお、お取引につきましては【入出金明細照会】等でもご確認ください。<br> \
                            ――◇◇―――――――――――――――――――――――――――――――◇◇―――<br><br>\
                            ◇本メールの送信アドレスは送信専用となっております。送信メールでのお問合わせは承りかねますので、あらかじめご了承願います。 ",

                            "いつも弊社カードをご利用いただきありがとうございます。<br><br>\
                            昨今の第三者不正利用の急増に伴い、弊社では「不正利用監視システム」を導入し、24時間365日体制でカードのご利用に対するモニタリングを行っています。<br><br>\
                            この度、ご本人様のご利用かどうかを確認させていただきたいお取引がありましたので、誠に勝手ながら、カードのご利用を一部制限させていただき、ご連絡させていただきました。<br><br>\
                            つきましては、以下へアクセスの上、カードのご利用確認にご協力をお願いいたします。<br>\
                            ご回答をいただけない場合、カードのご利用制限が継続されることもございますので、予めご了承ください。<br><br>\
                            ■ご利用確認はこちら<br><br>\
                            https://〇〇〇〇<br><br>\
                            ■発行者 ",

                            "平素は格別のお引き建てをいただき、誠にありがとうございます。<br><br>\
                            株式会社　北海情報　営業部の北野　海道です。<br><br> \
                            さて、弊社では12月より定休日を変更することになりました。<br><br>\
                            詳細は以下の通りです。<br><br>\
                            ■定休日：水曜日 <br>\
                            　（旧定休日：木曜日）<br><br> \
                            ■変更日：　令和4年12月1日（木曜日）より<br><br>\
                            ご不便をおかけすることと存じますが、何卒今後ともよろしくお願い申し上げます。<br>\
                            ご不明点、ご質問などございましたら、お気軽に以下の連絡先までご連絡ください。<br>\
                            －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－<br><br>\
                            株式会社　北海情報　営業部<br>\
                            北野　海道<br>\
                            住所:〒111-1111　北海道〇〇区〇〇町1-2-3<br>\
                            TEL  : 0123-〇〇〇〇-〇〇〇〇 /　FAX: 03-****-****<br>\
                            URL : http://www.＊＊＊.co.jp <br>\
                            Mail : hokkaijoho-svk@lmail.com ",
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