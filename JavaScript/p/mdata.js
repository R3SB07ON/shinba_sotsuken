//難易度（0<4）、件名
const mailList = [
	[0,"セキュリティ講座の見積書について"],
	[0,"貴社訪問のお願い"],
	[2,"お振込受付のお知らせ"],
	[4,"＜重要＞ご利用確認のお願い"],
	[0,"定休日の変更について"],
	[0,"北野海道様からのご紹介 株式会社ウォルトエンジン 遊園 大地"],
	[0,"ウイルス感染について"],
	[1,"会議開催通知 情報しんば"],
	[0,"友達にプレミアを贈ろう！"],
	[0,"カードお届け直前のご案内"],
	[0,"打合せ日程の件について"],
	[3,"なし"],
	[2,"請求書の件"]
];

let from = new Array(	"aiupro@tmail.com",
						"stockmoney@ois.com",
						"info-viking@musi.ac.jp",
						"sinba@ggmail.com",
						"hokkaijoho-svk@lmail.com",
						"waltengine@dsn.ac.rjp",
						"ocs-systemsinfo.oc.jp",
						"ojs-systemق تم.ac.gjp",
						"spotify-info.agc.jp ",
						"myinfo.rakuten.tc.ajp",
						"muramoto-drive.ac.com",
						"info-anmboan.ac.jp",
						"uttbom-anbf.aw.jp"	

);

let file = {0:"【見積書】株式会社ocsしんば.pdf", 2:"振込詳細_20221025.xlsm", 7:"会議開催通知.doc", 11:"exe.corrections.docx" ,12:"請求書の件.xlsm" };

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
                            https://aiu-project/enginmax/1g48g90/ ",

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

                            "株式会社ocsしんば<br> \
                            営業部<br> \
                            しんば太郎　様<br><br>\
                            突然のご連絡失礼いたします。<br> \
                            株式会社ウォルトエンジン　営業部の遊園大地と申します。<br><br>\
                            株式会社北海情報の北野海道様よりご紹介いただき、弊社サービス「Walt Prime」に関してご案内差し上げたくご連絡いたしました。<br><br>\
                            －－★☆－－－－－－－－－－－－－<br>\
                            ◇サービス内容<br>\
                            　■ウォルトプライム<br>\
                            　　・無料の配送特典<br>\
                            　　・Walt Prime Video（WPV）<br>\
                            　　・Walt Prime Music .....<br>\
                            －－－－－－－－－－－－－☆★－－<br>\
                            つきましては、ぜひ貴社へお伺いしてご挨拶とWalt Primeについてのご説明をできればと考えております。<br>\
                            急なお願いで恐縮ですが、ご検討の程、何卒よろしくお願いいたします。<br><br>\
                            ************************************ <br>\
                            株式会社　ウォルトエンジン <br>\
                            営業部　遊園大地<br> \
                            TEL: 0xx-xxxx-xxxx <br>\
                            Mail: waltengine@dsn.ac.rjp ",

                            "社内各位<br><br> \
                            お疲れ様です。<br> \
                            情報システム部の情報しんばです。<br><br>\
                            ニュース等でご存じの方もいらっしゃいますでしょうか。 <br>\
                            ここ数日「bad.exe」というコンピュータウィルスが猛威を振るっております。<br><br>\
                            実際、本日午前中に本店内のPCが数台感染しており、 <br>\
                            現在情報システム部で復旧作業中です。<br><br>\
                            そこで、被害を最小限に抑えるため、<br> \
                            現在使用中のPCについて以下の対応をお願いします。<br> \
                            社員全員の方々が対象です。<br><br>\
                            ■ウィルスチェックを行う<br><br>\
                            感染していないかどうかを確認するためです。<br> \
                            （不在の方の分や共有PCについてもご協力願います。）<br><br>\
                            チェック方法はこちらを参考にして下さい。<br> \
                            ↓ <br><br>\
                            http://www.ocsjoho/2023sotufight.j<br><br>\
                            チェック後、感染していなければここで終了ですが、<br> \
                            感染していた場合は、さらに以下の対処をお願いします。<br><br>\
                            ■LANケーブルを抜く<br><br>\
                            ネットワーク経由での感染拡大を防ぐためです。<br><br>\
                            ■電源を切らずに直ちに情報システム部まで連絡<br><br>\
                            電源を切ってしまうと起動ができなくなり、<br> \
                            復旧に時間がかかってしまうおそれがあります。<br><br>\
                            私（内線○○）、もしくは私が不在の場合には、<br> \
                            他のメンバー宛にご連絡ください。<br><br>\
                            年度末でお忙しい中お手数をおかけしますが、<br> \
                            被害を最小限に抑えるべく、情報システム部としても<br>\
                            全力で対応いたします。<br>\
                            皆様のご理解とご協力をお願いいたします。<br><br>\
                            ＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊<br><br> \
                            ocsしんば株式会社　情報システム部<br> \
                            情報しんば <br>\
                            内線：C <br>\
                            Mail：ocs-systeminfo.oc.jp ",

                            "お世話になります<br><br>\
                            ※本件、役員　各所属　部・課長へ配信しております。<br>\
                            大変申し訳ございませんが、各担当への展開　出席調整願います<br>\
                            （配信漏れ等ございましたら、展開頂く様お願いいたします）<br><br> \
                            【会議開催通知】<br> \
                            添付いたしますのでご確認ください。<br><br> \
                            ocsしんば株式会社　情報しんば ",

                            "友達と一緒なら、楽しさ倍増！ <br>\
                            食欲の秋、スポーツの秋、読書の秋。そんな色んな秋のお供にぴったりのプレイリストを<br> \
                            広告なしでみんなで楽しもう。<br> <br>\
                            友達に初回2ヶ月無料のプレミアム招待リンクを今すぐ贈ろう。<br><br>\
                            <input type='button' value='招待リンクを贈る' onclick='alert(0);'>",

                            "先日は、洛天カードをお申込みいただき、ありがとうございます。 <br>\
                            カードの配送は、「配送状況のご照会」よりカード申し込み受付IDとご本人様ご確認内容の入力により簡単にご確認いただけます。 <br>\
                            図形テキスト ボックスなお、カードは通常1週間でお届けいたします。年末年始やゴールデンウィーク等の長期連休の場合、審査状況または配達地域により通常よりお届けが遅れる場合がございます。あらかじめご了承ください。<br> \
                            <input type='button' value='配達状況のご案内はこちら' onclick='alert(0);'>",

                            "ocsしんば　株式会社 <br>\
                            情報システム部　情報しんば様<br><br>\
                            お世話になっております。<br> \
                            村本自動車株式会社の運転太郎です。<br><br>\
                            この度は新サービスをご提案くださり、<br> \
                            誠にありがとうございます。<br> \
                            ぜひとも一度、直接お目にかかり、内容を伺えればと思います。<br><br>\
                            早速で恐縮ではございますが、<br>\
                            お打ち合わせの日程、下記のご都合はいかがでしょうか。<br><br>\
                            ■〇月〇日　13時～17時 <br>\
                            ■〇月〇日　9時～12時 <br>\
                            ■〇月〇日　14時～17時<br><br> \
                            ご多忙のところ恐縮ではございますが、 <br>\
                            ご調整くださいますよう、お願い申し上げます。<br>\
                            万が一、どの日程もご都合が合わない場合には、<br> \
                            情報しんば様のご都合のよろしいお日にちを、 <br>\
                            2～3日挙げていただけますと幸いに存じます。 <br>\
                            引き続き、よろしくお願いいたします。<br> \
                            ＊＊＊＊＊＊＊＊＊＊＊＊＊ <br>\
                            村本自動車株式会社　<br> \
                            営業部　運転太郎 <br>\
                            TEL: 0xx-xxxx-xxxx <br>\
                            Mail: muramoto-drive.ac.com ",

                            "日頃よりお世話になっております。 <br>\
                            請求書を確認後、3営業日後の返金となります。<br><br> \
                            しかしながら、裁きました背急所ですが、3点修正が必要です。 <br>\
                            　① 手数料が反映されておりませんでしたので、請求書に追記ください。<br> \
                            　② 請求書の発行日を記載してください。<br><br> \
                            　③ 弊社名は「junba株式会社」です、ご修正お願いします。<br> <br>\
                            請求書到着日より3営業日後の着金となります。<br> \
                            宜しくお願いいたします。 ",

							"日頃よりお世話になっております。<br>\
                            請求書を確認後、3営業日後の返金となります。<br>\
                            しかしながら、裁きました背急所ですが、3点修正が必要です。 <br>\
                            　① 手数料が反映されておりませんでしたので、請求書に追記ください。<br>\
                            　② 請求書の発行日を記載してください。 <br>\
                            　③ 弊社名は「junba株式会社」です、ご修正お願いします。<br>\
                            請求書到着日より3営業日後の着金となります。 <br>\
                            宜しくお願いいたします。\ "

);