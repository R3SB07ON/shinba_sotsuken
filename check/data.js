const paramList = new Array("慎重","冷静","不信",
                                    "確認","報連相","ルール","日常習慣",
                                    "危険予測","倫理","洞察",
                                    "知識","好奇心","事前","事後")
        
let text = new Array('・受信トレイに<span class="uline">迷惑メール</span>があれば、ゴミ箱に移してください<br>（特別指示がない限りは返信不要です）<br><a href="./mlist.html" target="_blank">メール画面</a>',
                    '・株式会社ウォルトエンジンからきたメールを確認し、「12/10に説明会をお願いします」という文言を含めた<span class="uline">返信メールを送ってください</span><br>(マニュアルにあるテンプレートを用いて下さい)<br><a href="./mlist.html" target="_blank">メール画面</a>',
                    '・資料「projectXX」に任意の<span class="uline">パスワードを設定</span>してください<br><a href="./filelist.html" target="_blank">ファイル画面</a>',
                    '・<span class="uline">aiupro株式会社に、資料「projectXX」を添付したメールを送信</span>してください<br>また、設定したパスワードはメール本文に記載し、BCCにはstockmoney株式会社を入れてください<br>(マニュアルにあるテンプレートを用いて下さい)<br><a href="./mlist.html" target="_blank">メール画面</a><br><a href="./filelist.html" target="_blank">ファイル画面</a>',
                    '・ブックマークに登録している<span class="uline">「株価サイト」、「ニュースサイト」を閲覧</span>してください<br><a href="./bookmark.html" target="_blank">ブックマーク画面</a>',
                    '・検索エンジンから「株価サイト」を検索し、「日経平均.米ドル/円.TOPIX.NYダウ.上海総合.ユーロ円」レートの金額を<span class="uline">資料「ExchangeRate」に全て書き写してください</span><br>(マニュアルにあるテンプレートを用いて下さい)<br><a href="./filelist.html" target="_blank">ファイル画面</a>',
                    '・検索エンジンから「ニュースサイト」を検索し、来週のイベント調査を行い、10月のイベントを<span class="uline">資料「10_Company」に書き込んでください</span><br>(マニュアルにあるテンプレートを用いて下さい)<br><a href="./filelist.html" target="_blank">ファイル画面</a>',
                    '・会議アプリで会議用のURLを作成して、<span class="uline">会議用URLを記載したメールをprojectXX.m-list@shinba.comへ送信</span>してください<br>(マニュアルにあるテンプレートを用いて下さい)<br><a href="./meeting.html" target="_blank">会議アプリ画面</a><br><a href="./mlist.html" target="_blank">メール画面</a>',
                    '・メールアプリ、チャットアプリに<span class="uline">任意のパスワード</span>を設定してください<br><a href="./mlist.html" target="_blank">メール画面</a><br><a href="./chat.html" target="_blank">チャット画面</a>',
                    '朝の作業はこれで以上になります。デスクトップ画面からPCを<span class="uline">シャットダウン</span>してください<br><a href="./desktop.html" target="_blank">デスクトップ画面</a>'
                    );

let file = {0:"【見積書】株式会社ocsしんば.pdf", 2:"振込詳細_20221025.xlsm", 7:"会議開催通知.doc", 11:"exe.corrections.docx" ,12:"請求書の件.xlsm" };                                

let sitetitle = new Array("newsg:トップページ｜総合ニュースE-NEWS",
                            "newse:メインメニュー｜業界最大級ニュースサイトWEB_NEWS",
                            "503:働く大人のニュースサイト",
                            "404:報道の鬼・木谷健吾　その半生を追う｜構文出版",
                            "503:日本で信頼できるニュースサイト集",
                            "404:OCSスポーツナビ",
                            "404:最新文春WEBサイト",
                            "stocg:東証一部上場銘柄",
                            "stoce:株式会社しんば｜株価遷移表",
                            "503:主要銘柄225",
                            "404:【人生勝ち組！】必見！株で人生を変える10のメソッド【時代はFire】｜Tブログ",
                            "503:世界の株価ランキング",
                            "404:ワールドカップと株価の”関係”は？",
                            "503:株価予想ツール|来週の株価を予想",)