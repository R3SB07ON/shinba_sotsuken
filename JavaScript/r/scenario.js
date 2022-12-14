//メッセージ
/*
メッセージの順序
##テキストジャンプ（ジャンプ先）
+パラメータ
:画像
@効果音
本文
p（本文終了）
*選択肢
#テキストジャンプ（ジャンプ元）
*/
//プロローグ
const prologue = [
    "+start",
    ":0_0_1",
    ":1_1_0",
    "@0",
    "カタカタカタカタ…",
    "…",
    "…",
    "p",

    ":1_1_6",
    "高橋「…ふうっ",
    "今日も忙しいなあ",
    "p",

    "オレの名前は高橋（たかはし）",
    "とある新聞社の地方支社で働いている。",
    "p",

    "ここ数年で企業のセキュリティ対策が重要視されてきている。",
    "もちろんこの会社でもそれは例外ではない。",
    "いろいろ気を付けることが多くて大変だ…",
    "p",

    "たとえば最近、PCを処分するときは",
    "データを初期化するように規則に加えられた。",
    "こんな感じでどんどんルールが増えてきて正直覚えてられないよ…",
    "p",

    ":3_3_0",
    ":1_1_0",
    "うちの職場は4人の少数精鋭（？）で…",
    "原（はら）課長はその手の話題には疎いから苦労しているようだ。",
    "p",

    ":3_2_0",
    ":1_1_2",
    "そういうときは阿部（あべ）くんが頼りになる。",
    "ホントに優秀な後輩だ。",
    "p",

    ":3_4_0",
    ":1_1_6",
    "あと、同僚の清平（きよひら）は…",
    "問題行為も多いし、気を付けてもらいたい…",
    "p",

    ":3_0_0",
    "いろいろあるが今日もがんばろう…",
    "p",

    "",
    "～プロローグ・完～",
    "",
    "p",
    "*次のシナリオに進む_case2"

];

//case2　トラッシング
const case2 = [
    ":0_0_1",
    ":1_1_6",
    ":2_0_0",
    ":3_0_0",
    "高橋「さて、とにかく仕事の続きだ。",
    "次はこれを…",
    "p",

    ":2_3_0",
    "原「あー、ちょっと高橋くん。",
    "ちょっとよろしいかな？",
    "p",

    ":1_1_0",
    "高橋「おっ、原課長。",
    "どうしましたか？",
    "p",

    ":3_5_1",
    "原「業務データを記録していた",
    "ハードディスクの交換作業が終わってね。",
    "古いハードディスクの処分を頼みたいんだ。",
    "p",

    "高橋「そうですか。わかりました！",
    "（また面倒なことを押し付けてきたな…）",
    "p",

    ":0_0_3",
    ":1_0_0",
    ":2_0_0",
    ":3_0_0",
    "@2",
    "…",
    "p",

    ":0_0_1",
    ":1_1_6",
    ":3_5_1",
    "高橋「さて、どうしたものか…",
    "p",
    "*A:自分で処分する_#case2A",
    "*B:詳しい人に頼む_#case2B",

    //--A
        "##case2A",
        "高橋「面倒だけどしょうがない…",
        "自分でやろう。",
        "p",

        ":1_1_0",
        "高橋「あれ？そういえばコレってデータはまだ残ってるのか？",
        "捨てる前にデータを消去しないと。",
        "p",
        "*A:ファイルを全部ごみ箱に移動_#case2AA",
        "*B:ハードディスクを初期化_#case2AB",
        "*C:物理的に叩き割ってしまえ！_#case2AC",

        //--AA
            "##case2AA",
            "+2AA",
            ":1_1_6",
            "高橋「えーっと、消去といえばごみ箱かな？",
            "ここにファイルを移動すればいいだろう。",
            "p",

            ":1_1_0",
            "…",
            "高橋「よし、全部ごみ箱に入れたぞ。",
            "このハードディスクは今度の廃品回収に出そうか…",
            "p",
            "#case2end",

        //--AB
            "##case2AB",
            "+2AB",
            "高橋「こういう場合は初期化だな。",
            "さっそくやってみるか。",
            "p",

            "…",
            "高橋「さて、初期化ソフトもいろいろあるようだけど、",
            "とりあえずこのPC標準のソフトを使おう。",
            "p",

            "…",
            "高橋「よし、初期化がすんだぞ。",
            "このハードディスクは燃えないゴミに出せばいいかな？",
            "p",
            "#case2end",

        //--AC
            "##case2AC",
            "+2AC",
            "高橋「…消したデータを復元するって話もチラホラ聞くよな。",
            "となると一番確実なのは…",
            "p",

            ":0_0_3",
            ":1_0_0",
            ":2_0_0",
            ":3_0_0",
            "@2",
            "…",
            "p",

            ":0_0_4",
            ":1_1_0",
            ":3_5_1",
            "高橋「よし、ハンマー準備完了。",
            "それっ！",
            "p",

            ":1_1_5",
            ":3_5_2",
            "@1",
            "ガシャン！",
            "p",

            "高橋「うわっ！",
            "破片が飛び散ってしまった。",
            "危うくケガするところだったぞ…",
            "p",

            ":1_1_0",
            "高橋「次からは気を付けないとな。",
            "ともあれ、これだけ粉々にすれば大丈夫だろう。",
            "取扱いに気を付けてゴミに出そう。",
            "p",
            "#case2end",

    //--B
        "##case2B",
        "+2B",
        "高橋「う～ん",
        "ヤッパリこういうことは詳しい人に頼もうか。",
        "さっそく阿部くんを呼ぼう。",
        "p",

        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "…",
        "p",

        ":0_0_1",
        ":1_1_6",
        ":2_2_0",
        "高橋「…というわけで、オレのかわりに",
        "やっといてくんないかな？",
        "p",

        "阿部「いいですよ。",
        "こういうことは得意分野ですしね。",
        "p",

        ":1_1_2",
        "高橋「いや～、悪いな。",
        "お礼に今度オゴるからさ…",
        "p",
        "#case2end",

    //--終了
    "##case2end",
    "",
    "～トラッシング編・完～",
    "",
    "p",
    "*次のシナリオに進む_case1"
];

//case1　不正ログイン
const case1 = [
    ":0_0_5",
    ":1_1_2",
    ":2_0_0",
    ":3_0_0",
    "高橋「ふうー、今日も仕事がんばったな。",
    "さて、『ファイナノレ・ファソタヅー41』でも遊ぶとするか。",
    "p",

    ":3_5_3",
    "@0",
    "高橋「さっそくログインだ。",
    "IDとパスワードを入力して…",
    "p",

    ":1_1_5",
    "@3",
    "『ログインに失敗しました』",
    "p",

    "高橋「あ、あれ？どうしたんだ？",
    "打ち間違えたわけでもないのに…",
    "p",

    ":1_1_3",
    "高橋「あっ！まさか不正ログイン？",
    "どうすればいいんだ？",
    "p",
    "*A:ゲーム運営に連絡_#case1A",
    "*B:別サイトの登録情報を確認_#case1B",
    "*C:ゲームのパスワードを変更_#case1C",
    "*D:クレジットカードを停止_#case1D",

    //--A
        "##case1A",
        "+1A",
        "高橋「これは…運営に確認を取ったほうがいいな。",
        "p",

        "高橋「とりあえず問い合わせてみよう。",
        "p",

        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "…",
        "p",

        ":0_0_5",
        ":1_1_0",
        "高橋「問い合わせた結果、ひとまずパスワードを",
        "変更するように指示を受けた。",
        "p",

        "これで何もなければいいけど…",
        "p",
        "#case1end",       
    //--B
        "##case1B",
        "+1B",
        ":1_1_6",
        "高橋「待てよ…もし、不正ログインなら他のサイトの",
        "登録情報も危険じゃないか？",
        "p",
    
        "高橋「パスワードを使いまわしてる場合、芋づる式に",
        "データが流出するんだから…",
        "p",
    
        ":1_1_6",
        "高橋「こうしちゃいられないな。",
        "他のサイトを確認しないと。",
        "p",
    
        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "…",
        "p",
    
        ":0_0_5",
        ":1_1_0",
        "高橋「ひとまず各サイトのパスワードの変更はすんだぞ。",
        "とりあえず被害の拡大は防げそうだ。",
        "p",
        "#case1end",

    //--C
        "##case1C",
        "+1C",
        "高橋「パスワードが流出したのか？",
        "どうやってかは知らないけど…",
        "p",

        ":1_1_6",
        "高橋「あっ、そうだ！",
        "パスワードを変更しよう！",
        "p",

        "高橋「登録済のメールアドレスから",
        "再設定ができたはずだ…",
        "p",

        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "…",
        "p",

        ":0_0_5",
        ":1_1_6",
        "高橋「ひとまずパスワードの変更はすんだぞ。",
        "これ以上何も起こらなければいいんだけど…",
        "p",
        "#case1end",
    //--D
        "##case1D",
        "+1D",
        "高橋「不正ログインといえば…",
        "登録情報の不正利用が怖いな。",
        "p",
    
        ":1_1_5",
        "高橋「あっ！そういえばこのゲーム、課金のために",
        "クレジットカードを登録しているんだった！",
        "p",
    
        "高橋「まずいぞ。",
        "いったんカード停止すべきか！？",
        "p",
    
        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "…",
        "p",
    
        ":0_0_5",
        ":1_1_3",
        "高橋「少なくとも金銭的な被害は真っ先に防げた。",
        "さて、ログインできない問題はどうしようか…",
        "p",
        "#case1end",

    //--終了
    "##case1end",
    "",
    "～不正ログイン編・完～",
    "",
    "p",
    "*次のシナリオへ進む_case3"

];

//case3　パスワード聞き出し
const case3 =[
    ":0_0_5",
    ":1_1_0",
    ":2_0_0",
    ":3_0_0",
    "高橋「はあ～、今日は休みだ。",
    "ゆっくりするかな。",
    "p",

    ":3_5_4",
    "@4",
    "Trrrrr…",
    "p",

    "高橋「って、休みだっていうのに",
    "会社からか？人づかいの荒いこと…",
    "p",

    "高橋「あれ？原課長じゃないな。",
    "知らない番号だ。",
    "p",
    "*A:無視！_#case3A",
    "*B:出る！_#case3B",
    //--A
        "##case3A", 
        "+3A",
        "高橋「うーん、知らない番号だしな。",
        "それに仕事の電話だとしても休日に対応する義理もない。",
        "p",
        
        ":1_1_4",
        ":3_0_0",
        "高橋「ほっとこほっとこ！",
        "どうせロクでもない話だろう。",
        "p",
        "#case3end",
    //--B
        "##case3B",
        ":1_1_6",
        "高橋「なんだろう？",
        "とりあえず出てみるか。",
        "p",
    
        "@5",
        "ピッ",
        "p",
    
        ":2_4_1",
        "『もしもしー、富売新聞社ですが…",
        "p",
    
        ":1_1_0",
        "高橋「富売？なんだ、うちの会社の方ですか。",
        "p",
    
        "『はい、社員情報管理データの移行について",
        "お話がありまして、それでお電話を…",
        "p",
    
        "高橋「データ移行？初耳ですね。",
        "まあ、それはいいとしてオレになんの用ですか？",
        "p",
    
        "『データ移行に際して、全社員の",
        "社内ポータルサイトのパスワードが必要になりまして、",
        "こうして電話で伺っているところです。",
        "p",
    
        "『移行期間も長くなると大変なので、",
        "至急あなたのパスワードを教えてくれませんか？",
        "p",
        "*A:教える_#case3BA",
        "*B:教えない_#case3BB",
        //--BA
            "##case3BA",
            "+3BA",
            ":1_1_2",
            "高橋「いいですよ。オレのパスワードは…",
            "p",
        
            ":0_0_3",
            ":1_0_0",
            ":2_0_0",
            ":3_0_0",
            "@2",
            "そして週明け…",
            "p",
        
            ":0_0_1",
            ":1_1_2",
            ":2_3_0",
            "原「おはよう、高橋くん。",
            "p",
        
            "高橋「おはようございます。",
            "そういえば、本社の方もいろいろ大変ですよねー。",
            "データ移行なんて…",
            "p",
        
            "原「え？なんの話だい？",
            "p",
        
            ":1_1_4",
            "高橋「え？",
            "p",
            "#case3end",
        //--BB
            "##case3BB",
            "+3BB",
            ":1_1_6",
            "高橋「いや、急にそう言われましても、",
            "いちおうパスワードは秘密情報なんでね…",
            "p",

            "『頼みますよ～、ホントに時間がなくって…",
            "p",

            "高橋（妙に急かすな。ヤッパリ怪しい…）",
            "p",

            ":1_1_2",
            "高橋「あ、あとでまた折り返しまーす。",
            "p",

            ":2_0_0",
            ":3_0_0",
            "@5",
            "ピッ",
            "p",

            ":1_1_6",
            "高橋「これは原課長に確認したほうがよさそうだ。",
            "p",

            ":0_0_3",
            ":1_0_0",
            ":2_0_0",
            ":3_0_0",
            "@2",
            "…そして後日、原課長にこの件を話した。",
            "p",

            "事実確認をしたところ、本社ではデータ移行作業は",
            "行われていないということだった。",
            "p",

            "つまり、アレはパスワードを",
            "聞き出すための虚偽の電話だった！",
            "くわばらくわばら…",
            "p",
            "#case3end",
    //--終了
    "##case3end",
    "",
    "～パスワード聞き出し編・完～",
    "",
    "p",
    "*次のシナリオへ進む_case4"
];

//case4 総当たり攻撃
const case4 = [
    ":0_0_1",
    ":1_0_0",
    ":2_3_0",
    ":3_0_0",
    "原「さて、社内規則にある通り、今日は",
    "パスワードを定期的に変更する日だ。",
    "p",

    "原「長期間同じパスワードを使うのは",
    "危険だからな。",
    "p",

    ":1_1_0",
    ":2_2_0",
    ":3_5_3",
    "@2",
    "…",
    "p",

    ":1_1_6",
    "高橋「はあ、いちいち変えるの",
    "メンドウだよなあ、これ。",
    "p",

    "高橋「だいいち、定期的にパスワードを変えるのが",
    "本当に効果的なんだろうか？",
    "p",

    "阿部「たしかに、それについては疑問の意見も",
    "あるそうですね。",
    "p",

    "阿部「ま、それはそれとしてパスワードを",
    "設定しましょうよ。なるべく突破されにくいものを。",
    "p",

    ":1_1_0",
    "高橋「突破されにくい、ねえ…",
    "パスワードを突破する方法もいろいろあるよな。",
    "p",

    "阿部「そうですね。分かりやすいのが総当たり攻撃とか…",
    "p",

    "高橋「総当たりか、すべての組み合わせを試す方法だな。",
    "今回はそれを防げるパスワードにしてみよう。よし…",
    "p",
    "*A:できるだけ長いパスワードにしよう_#case4A",
    "*B:英数や記号を混ぜて複雑にしよう_#case4B",

    //--A
        "##case4A",
        "+4A",
        "@0",
        "高橋「…これでよし。",
        "長いパスワードなら総当たりも難しいだろう。",
        "p",
        
        ":2_2_1",
        "阿部「そうですね。数字だけの暗証番号にしても",
        "4ケタで1000通り、5ケタで10000通りに増えますから、",
        "それだけ総当たりの手間が増えていきますね。",
        "p",

        "高橋「肝心なのは、この長いパスワードを忘れないように",
        "することだけどね。",
        "p",
        "#case4end",
    //--B
        "##case4B",
        "+4B",
        "@0",
        "高橋「うーん、英数字だけじゃなく",
        "記号も混ぜて複雑にするのはどうだ？",
        "p",
    
        "阿部「その場合はケタ数に気を付けないといませんね。",
        "あまり短いケタ数だと総当たりで正解のパターンに",
        "引っかかってしまう可能性もありますから。",
        "p",
    
        "阿部「でも複雑にするという観点は大事ですね。",
        "数字だけだと1ケタ10パターンしかありませんが、これに",
        "大小のアルファベットが加わると1ケタ62パターンになりますから…",
        "p",
    
        ":2_2_1",
        "阿部「ここからさらにケタ数を増やせば",
        "数百兆通りには軽く到達しますよ。",
        "p",
    
        "高橋「なるほど、参考になる。",
        "p",    
        "#case4end",
    //--終了
    "##case4end",
    "",
    "～総当たり攻撃編・完～",
    "",
    "p",
    "*次のシナリオへ_case5"

];

//case5　ランサムウェア
const case5 = [
    ":0_0_1",
    ":1_1_0",
    ":2_0_0",
    ":3_0_0",
    "高橋「さて、今日も仕事だ、さっそくPCを",
    "立ち上げて…",
    "p",

    ":1_1_5",
    ":3_5_5",
    "@3",
    "高橋「な、なんだこれ！？",
    "ファイルが暗号化されて開けないじゃないか！？",
    "p",

    ":2_3_0",
    "原「なに、高橋くんのPCもか！",
    "ということは、すべてのPCがウイルスに",
    "感染してしまったのか…",
    "p",

    "高橋「すべての…",
    "それは大変ですね。とりあえず阿部くんに",
    "何が起こったか確かめてもらいましょう。",
    "p",

    ":0_0_1",
    ":1_0_0",
    ":2_0_0",
    ":3_0_0",
    "@2",
    "…",
    "p",

    ":1_1_3",
    ":2_2_0",
    ":3_5_5",
    "高橋「ランサムウェア？",
    "p",

    "阿部「感染したPCのファイルを",
    "暗号化（ロック）するウイルスですね。",
    "p",

    "阿部「指定の口座にいくらかの額を振り込めば",
    "ロックを解除するというメッセージが出ています。",
    "p",

    ":1_1_6",
    "高橋「なるほど、データを人質に",
    "身代金を要求してるわけか。",
    "p",

    ":2_3_0",
    "原「ど、どうする？顧客の個人情報も暗号化されてしまった。",
    "これを失えば信用にかかわるぞ",
    "p",

    "高橋（頼りない上司だなあ）",
    "p",
    "*A:信用は大事。身代金を払う_#case5A",
    "*B:犯罪者に金を払うなんて！_#case5B",

    //--A
        "##case5A",
        "+5A",
        "高橋「そうですね、これはわが社だけの問題じゃない。",
        "身代金を払って解放してもらいましょう。",
        "p",

        "原「う、うむ。しかし本当に払えばもとに戻るのかね？",
        "相手は犯罪者だからな…",
        "p",

        "高橋（たしかにそれは否定できない…）",
        "p",

        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "その後、身代金を払ったものの、解除はされなかった。",
        "それどころか、追加の身代金要求を受けた！",
        "p",

        "しかし一度払った以上後には引けないということで、",
        "その要求にも応じると、ようやくファイルが回復した。",
        "p",

        "ファイルの損失は防げたものの、",
        "カモにされてしまったようだ…",
        "p",
        "#case5end",

    //--B
        "##case5B",
        ":1_1_1",
        "高橋「なに言ってるんです。犯罪者に金を払うなど…！",
        "それに身代金を払って素直に元に戻る保証もないでしょう？",
        "p",
    
        "原「そ、それもそうだな。では、我々でなんとかできないだろうか？",
        "なにかファイルを回復する方法がないだろうか？",
        "p",
    
        ":1_1_6",
        "高橋「暗号化されたファイルを回復する方法…",
        "考えてみましょう。",
        "p",
        "*A:自力で復号する_#case5BA",
        "*B:バックアップから復旧すれば…_#case5BB",
        //--BA
            "##case5BA",
            "+5BA",
            "高橋「元に戻す…う～ん。",
            "それこそ、自力で暗号化を解除するとか…",
            "p",
        
            "原「自力で？そんなことできるのか？",
            "p",
        
            ":2_2_0",
            "阿部「そうですね…自力で復旧…",
            "できないわけではない、と思いますよ。",
            "p",
        
            ":1_1_5",
            "高橋「そうか、その可能性に賭けてみよう。",
            "p",
        
            ":0_0_3",
            ":1_0_0",
            ":2_0_0",
            ":3_0_0",
            "@2",
            "尽力の結果、なんとか復号ツールを見つけ、",
            "暗号化を解除することができた。",
            "p",
        
            "既存のランサムウェアにはこうした復号ツールも",
            "作られているが、そうでなければアウトだった。",
            "p",
        
            "今後は感染経路を特定し、",
            "再発防止に動くそうだ。",
            "p",
            "#case5end",
        
        //--BB
            "##case5BB",
            "+5BB",
            ":1_1_0",
            "高橋「そうだ、バックアップだ！",
            "原課長、データのバックアップはとってありますよね？",
            "p",
        
            "原「う、うむ。毎週月曜日の",
            "午前0時にな。",
            "p",
        
            ":1_1_5",
            "@1",
            "高橋「へ？月曜…　それだけですか？",
            "日次のバックアップは？今日は金曜ですよ！",
            "p",
        
            "原「残念だが週1回しかバックアップはとっていないのだよ。",
            "だがこれで元に戻ることには戻るんだろう？",
            "p",
        
            ":1_1_0",
            "高橋「はあ、そりゃまあ…",
            "p",
        
            ":1_1_6",
            "高橋（あ～あ、4日ぶんのデータがパーになるのか…）",
            "p",
        
            ":0_0_3",
            ":1_0_0",
            ":2_0_0",
            ":3_0_0",
            "@2",
            "その後、バックアップ作業を終え、",
            "何とかファイルが復活した",
            "p",
        
            "バックアップファイルもウイルスに感染していたら",
            "一巻の終わりだったが、ネットワークから隔離された場所に",
            "保管していたので助かった。",
            "p",
        
            "こういった事態に備えて日ごろから",
            "準備するのは大事だと身に染みて思い知った…",
            "p",
            "#case5end",
    //--終了
    "##case5end",
    "",
    "～ランサムウェア編・完～",
    "",
    "p",
    "*次のシナリオへ進む_case7"
];

//case7 情報漏洩
const case7 = [
    ":0_0_1",
    ":1_1_0",
    ":2_4_0",
    ":3_0_0",
    "高橋「遠方にある支社に、わが社の資料を渡すことになった。",
    "それも結構な量だ。インターネット環境も整っていないので",
    "直接受け渡すことになった。",
    "p",

    ":3_5_6",
    "高橋「資料はこのUSBメモリにコピーして収めてある。",
    "じゃあ頼むぞ、清平。",
    "p",

    "清平「へい。行ってくるでざんす。",
    "p",

    ":0_0_3",
    ":1_0_0",
    ":2_0_0",
    ":3_0_0",
    "@2",
    "…",
    "p",

    ":0_0_2",
    ":1_4_0",
    ":2_4_2",
    "清平「…というわけで、資料のコピーが終わったでざんす。",
    "それでは、失礼するでざんす。",
    "p",

    "社員「いやー、ありがとうございました。",
    "今後ともよろしくお願いしますね。",
    "p",

    "清平「こちらこそでざんす。",
    "p",

    ":0_0_3",
    ":1_0_0",
    ":2_0_0",
    ":3_0_0",
    "@2",
    "…",
    "p",

    ":0_0_6",
    ":1_4_0",
    ":2_0_0",
    "清平「はあ、今日も仕事疲れたでざんす。",
    "たまにはパーッと豪遊するでざんす。",
    "p",

    "清平「お、あの居酒屋、よさそうでざんすね。",
    "p",

    //":0_0_6",
    ":1_0_0",
    ":2_0_0",
    ":3_0_0",
    "@2",
    "…",
    "p",

    ":0_0_6",
    ":1_4_0",
    ":2_0_0",
    "清平「…うーん、ここはどこでざんす？",
    "どうやら路上で寝てしまったらしいでざんす。",
    "p",

    "清平「…あれ、カバンがないでざんす…",
    "どこかでなくしたでざんす？",
    "p",

    "清平「…あ",
    "p",

    ":0_0_3",
    ":1_0_0",
    ":2_0_0",
    "@2",
    "…",
    "p",

    ":0_0_1",
    ":1_1_5",
    ":2_4_0",
    "高橋「USBメモリをなくしただって！？",
    "p",

    "清平「申し訳ないでざんす。",
    "居酒屋にも問い合わせたでざんすが、",
    "忘れ物はなかったらしいでざんす。",
    "p",

    ":1_3_0",
    "原「ということは、店を出てから紛失したのか…",
    "p",

    ":1_1_7",
    "高橋「これはそうそう見つかりそうにないな。",
    "しかし、紛失ならまだしも漏洩したらタダゴトじゃないぞ。",
    "p",

    "清平「も、もう一度探してくるでざんす…",
    "p",

    ":0_0_3",
    ":1_0_0",
    ":2_0_0",
    "@2",
    "それから数日、清平による死に物狂いの捜索で奇跡的に",
    "USBメモリが発見された。とあるマンションの一室で",
    "カバンごと見つかったそうだ。",
    "p",

    "カバンの中身はすべて当初のままで、盗難の痕跡はなかった。",
    "とりあえず情報漏洩の心配はなくなったが…",
    "p",

    ":0_0_1",
    "@2",
    "…",
    "p",

    ":2_3_0",
    "原「では、今回の事件の再発防止会議を行う。",
    "積極的に意見を出すように！",
    "p",

    ":1_1_7",
    ":2_2_0",
    "高橋「はあ、余計な時間は取りたくないのに…",
    "p",

    "阿部「しかたありませんよ。",
    "こんな事態が起こってしまった以上。",
    "p",

    ":1_1_6",
    "高橋「っていうか、オレたち3人だけ？",
    "当の清平は？",
    "p",

    ":2_3_0",
    "原「出勤停止処分中だ。",
    "それに、彼がいない方が君も遠慮なく物言いできるだろう？",
    "p",

    "高橋（けっこうひどい言い草だ）",
    "p",

    ":2_2_0",
    "阿部「それにしてもUSBメモリの紛失ですか…",
    "ちまたではよく聞きますがどうすればいいんでしょうね。",
    "p",

    ":2_3_0",
    "原「ああ。今回は何とかUSBメモリを回収できたが、",
    "最悪の場合は情報流出でわが社の信用にかかわる事態となった。",
    "p",

    "原「それを踏まえて、具体的な対策が必要だと思う。",
    "では高橋くん。",
    "p",

    ":1_1_0",
    "高橋「は、はい。",
    "p",

    "原「君の意見を聞きたい。具体的な対策を",
    "3つほど答えてくれんか？",
    "p",

    ":1_1_0",
    "高橋「3つですか？",
    "う～ん…",
    "p",
    "*A:USBにパスワードを設定する_#case7A",
    "*B:受け渡しが終わった際にデータを削除する_#case7B",
    "*C:個人ではなく業者に搬送を依頼する_#case7C",
    "*D:データの取り扱いルールを厳しくする_#case7D",
    "*E:USBを使わず、ネットワークを活用する_#case7E",

    //--A
        "##case7A",
        "+7A",
        ":3_5_6",
        "高橋「USBメモリにパスワードを設定すればいいんですよ。",
        "そうすれば少なくとも情報漏洩の抑止にはなると思います。",
        "p",

        "原「ううむ、紛失した後の対策か。",
        "p",

        ":2_2_0",
        "阿部「というか、してなかったんですね。パスワード。",
        "p",

        ":1_1_4",
        "高橋「ま、まあこれでも",
        "ないよりマシというか…",
        "p",

        "阿部「それでも総当たりで解読される可能性はあります。",
        "p",

        ":1_1_6",
        "高橋「総当たりか…たしかに手元にUSBメモリが",
        "ある限り、解除の試行はいくらでもできるな。",
        "p",

        ":1_1_0",
        "高橋「それなら…何度かパスワードを間違えると",
        "データが自動的に消滅するようにすればいいんじゃないか？",
        "p",

        "高橋「そうすれば総当たりも不可能になる。",
        "p",

        ":2_2_1",
        "阿部「そうですね、それくらいの仕組みがあれば",
        "有効な対策でしょうね。",
        "p",
        "#case7repeat",

    //--B
        "##case7B",
        "+7B",
        "高橋「だいいち、USBに入ってる資料って、",
        "支社に受け渡すためにコピーして",
        "持ち出したんですよね？",
        "p",

        "高橋「資料を受け渡した時点でUSBメモリ内のデータは",
        "不要になってるんだから、その時点でデータを削除すれば",
        "いいと思うんです。",
        "p",

        "原「なるほど。帰りの際にデータを持っておく",
        "必要はないということか。",
        "p",

        "高橋「そうですね。清平みたいに飲んで帰る…",
        "ということも起こりうるので、集中力の落ちる帰り際に",
        "焦点を当てた対策も大事かと思います。",
        "p",

        ":2_2_0",
        "阿部「ただ、ひとつ注意したいのはデータ復元の可能性ですね。",
        "ただ削除するだけだと復元されるかもしれません。",
        "p",

        "高橋「そうだな。その点は専用の削除ツールを",
        "使えばいいんじゃないかな。",
        "p",
        "#case7repeat",

    //--C
        "##case7C",
        "+7C",
        ":1_1_6",
        "高橋「機密情報をイチ社員に運搬させるのが",
        "問題かと思います。",
        "p",

        "高橋（しかも、今回はあの清平だったもんな）",
        "p",

        "原「それも一理あるな。それじゃあどうする？",
        "p",

        ":1_1_0",
        "高橋「運送会社には重要な荷物を送るためのサービスがあります。",
        "ご存じですか？",
        "p",

        "原「いいや。どういうサービスなんだ？",
        "p",

        "高橋「GPS付きの専用ケースに荷物を入れて運ぶ…などということが",
        "できるそうです。これなら常に位置を追跡できますし、紛失の",
        "リスクも低減できるでしょう。",
        "p",

        "原「なるほど。餅は餅屋、ということだな。",
        "サービス料金も勘案して利用を検討してみよう。",
        "p",
        "#case7repeat",

    //--D
        "##case7D",
        "+7D",
        "高橋「ところで、USBの運搬について、具体的な取り決めが",
        "なかったですね。",
        "p",

        "原「ああ、そのあたりは高橋君に一任したからな。",
        "p",

        ":1_1_7",
        "@1",
        "高橋（ぎくっ）",
        "「…まあ、確かに安易にヤツにUSBを渡したオレにも",
        "責任はありますが…",
        "p",

        ":1_1_0",
        "高橋「どうですか？コレを機にデータ持ち出しの",
        "許可を徹底するのは。",
        "p",

        "原「そうだな、面倒だがルールとして定めておこう。",
        "p",

        ":1_1_6",
        "高橋（あんたが面倒って言うのか…）",
        "p",

        "#case7repeat",

    //--E
        "##case7E",
        "+7E",
        ":1_1_1",
        "高橋「だいいち、今どきUSBでデータを持ち運ぶのが",
        "よろしくない！",
        "p",
        
        ":1_1_6",
        "高橋「支社との間にプライベートなネットワークを",
        "構築すれば今回のような事態は防げるはずです！",
        "p",

        "原「支社間で専用線を敷設するというのか？",
        "それはコストが大きいと思うが…",
        "p",

        "高橋「そうですね、VPNを利用するのはどうでしょうか？",
        "それならコストも抑えられます。",
        "p",

        ":2_2_0",
        "阿部「インターネット上に仮想の専用線を作るんですね。",
        "p",

        ":2_3_0",
        "原「ほう、そういったこともできるのか。",
        "ぜひ検討しておこう。",
        "p",

        "#case7repeat",

    //--同じ選択肢
    "##case7overlap",
    ":1_1_6",
    "高橋（いや…さっき同じことを言ったな。",
    "他のことを言おう。）",
    "p",
    "#case7repeat",

    //--繰り返し
    "##case7repeat",
    ":0_0_1",
    ":1_1_0",
    ":2_3_0",
    ":3_0_0",
    "原「それでは次の意見を聞こう。",
    "情報漏洩の具体的な対策とは…！？",
    "p",
    "*A:USBにパスワードを設定する_#case7A",
    "*B:受け渡しが終わった際にデータを削除する_#case7B",
    "*C:個人ではなく業者に搬送を依頼する_#case7C",
    "*D:データの取り扱いルールを厳しくする_#case7D",
    "*E:USBを使わず、ネットワークを活用する_#case7E",

    //--終了
    "##case7end",
    ":0_0_1",
    ":1_1_0",
    ":2_3_0",
    ":3_0_0",
    "原「…よろしい。今回、高橋君から出た意見をもとに",
    "改善策を検討しよう。",
    "p",

    "原「では会議を終了する。",
    "一同解散！",
    "p",

    ":1_0_0",
    ":2_0_0",
    "@2",
    "…",
    "p",

    ":1_1_0",
    ":2_2_0",
    "高橋「ふうっ。",
    "清平のおかげで大変なことになったな…",
    "p",

    "阿部「まあ、USBメモリが見つかってよかったですね。",
    "危うく情報漏洩につながるところでしたから。",
    "p",

    "高橋「それもそうかな？",
    "まあいい。さーて、自分の仕事に戻ろう。",
    "p",

    ":0_0_3",
    ":1_0_0",
    ":2_0_0",
    "しかし、このときのオレたちは想像もしていなかった。",
    "清平がさらなるトラブルを起こすことを…",
    "p",

    "",
    "～情報漏洩編・完～",
    "",
    "p",
    "*次のシナリオへ進む_case6"
];

//case6　内部不正
const case6 = [
    ":0_0_1",
    ":1_1_0",
    ":2_0_0",
    ":3_0_0",
    "高橋「おはようござ―――",
    "清平はまだ出勤停止中か？",
    "p",

    ":2_2_0",
    "阿部「ああ、清平さんなら",
    "もう会社には来ないそうですよ。",
    "p",

    ":1_1_5",
    "高橋「え、どういうことだ？",
    "p",

    "阿部「辞表を出して今日付で退職したそうです…",
    "まあここにも居づらかったでしょうしね。",
    "p",

    "高橋「へえー、アイツこれからどうするんだろう。",
    "次の働き口があるのかな…",
    "p",

    ":1_1_0",
    "高橋「っと、いなくなったヤツのことはいいや。",
    "仕事仕事…",
    "p",

    ":0_0_3",
    ":1_0_0",
    ":2_0_0",
    ":3_0_0",
    "@2",
    "その日の深夜…",
    "p",

    ":0_0_1",
    ":1_4_0",
    ":3_5_3",
    "清平「ククク、さんざんお世話になった職場でざんす。",
    "p",

    "清平「しっかりとお礼はしなきゃいけないでざんすからねえ…",
    "p",

    ":0_0_3",
    ":1_0_0",
    ":2_0_0",
    ":3_0_0",
    "@2",
    "さらに数日後…",
    "p",

    ":0_0_1",
    ":1_1_3",
    ":2_3_0",
    "高橋「情報漏洩！？今度は本当に！？",
    "p",

    "原「ああ。ウチの機密情報がインターネットに公開されているんだ。",
    "以前のUSBの件は未然に防げたが…",
    "p",

    ":2_2_0",
    "阿部「どこから漏れたんですか？",
    "p",

    ":2_3_0",
    "原「い、いや、それがわからないんだよ。",
    "心当たりが浮かばなくてな。",
    "p",

    "高橋「とにかく今はすべきことをしないと！そう…",
    "p",
    "*A:調査です！_#case61A",
    "*B:公表です！_#case61B",
    "*C:隠ぺいです！_#case61C",

    //--A
        "##case61A",
        "+61A",
        ":1_1_0",
        "高橋「原因を突き止めましょう。",
        "なんにしてもまずは原因を把握しなくては。",
        "p",

        "原「たしかにその通りだ。",
        "私は関係各社に釈明をしてくるからそっちは頼んだぞ。",
        "p",

        "高橋「はい！",
        "じゃあ阿部くん、協力してくれ！",
        "p",

        ":2_2_0",
        "阿部「承知しました！",
        "p",
                
        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "原課長が事態の公表をする傍ら、",
        "オレたちは原因を突き止めた…",
        "p",

        "#case62",
    //--B
        "##case61B",
        "+61B",
        ":1_1_0",
        "高橋「まずは関係者にこのことを知らせなくては。",
        "機密情報漏洩の影響は我々だけに及びませんよ！",
        "p",

        "原「たしかにその通りだ。",
        "では高橋くん。私とともに関係各社に向かおう。",
        "p",

        "高橋「はい！",
        "じゃあ阿部くん、原因の調査は頼んだ！",
        "p",

        ":2_2_0",
        "阿部「承知しました！",
        "p",
                
        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "オレは原課長とともに事態を公表し、",
        "原因は調査中であることを説明した。",
        "p",

        "そのかたわらで阿部くんが原因を突き止めてくれた…",
        "p",

        "#case62",

    //--C
        "##case61C",
        "+61C",
        ":1_1_5",
        "高橋「い、隠ぺいを…",
        "こんなことが知れたら信用が…",
        "p",

        ":2_2_2",
        "阿部「高橋さん！？",
        "なに言ってるんです！？",
        "p",

        ":2_3_0",
        "原「う、うむ。そうだな。",
        "このことはくれぐれも他言無用に…",
        "p",

        ":2_2_2",
        "阿部「課長！？",
        "p",
                
        ":0_0_3",
        ":1_0_0",
        ":2_0_0",
        ":3_0_0",
        "@2",
        "血迷ったオレと原課長だったが、",
        "阿部くんの必死の説得で正気を取り戻した。",
        "p",

        "そして気を取り直し、関係各社に対し事態を公表、",
        "原因調査に努めた。",
        "p",

        "#case62",
    
    //--2
    "##case62",
    "そして…",
    "p",

    ":0_0_1",
    ":1_1_5",
    ":2_3_0",
    "高橋「内部不正、ですか？",
    "p",

    "原「ああ、残念なことにな。",
    "清平くんのしわざだったらしい。",
    "p",

    "原「数日前の深夜、オフィスに忍び込んだらしい。",
    "それから私物のUSBメモリを使って自分のデスクのPCから",
    "データを持ち出したそうだ。",
    "p",

    "高橋「どうしてこんなことを？",
    "p",

    ":2_2_0",
    "原「いわく、少しのミスで厳罰な処分を下す会社に",
    "不服があったと…",
    "p",

    ":1_1_7",
    "高橋「あのUSB紛失を『少しのミス』かよ、",
    "完全な逆恨みだな…",
    "p",

    ":2_3_0",
    "原「とにかく！彼の身柄は警察に任せるとして、",
    "我々は再発防止の案について検討しなければならない！",
    "p",

    "原「というわけで、これより、",
    "今回の事件の再発防止会議を行う。",
    "p",

    "高橋（また会議かあ）",
    "p",

    ":1_1_6",
    "高橋「今回のケースは内部不正ですね。",
    "これをどう防ぐか…",
    "p",

    ":1_1_0",
    "高橋「まずは『機会』について考えましょう。",
    "今回には事件が生まれるスキがあったんじゃないですか？",
    "p",

    "高橋「だいいち、夜のオフィスに清平はどうやって",
    "入り込んだんですか？",
    "p",

    "原「そのあたりは原因調査で中心になって",
    "動いてくれた阿部くんが詳しいだろう。",
    "p",

    ":2_2_0",
    "阿部「侵入については簡単だったと思います。",
    "ウチは社員証を使った入退室認証もありませんからね。",
    "昼間のうちにビルに入り、夜になるのを待ったのだと思います。",
    "p",

    "高橋「なるほど…それで、自席のPCを起動して",
    "データを盗んだわけか。",
    "p",

    "阿部「はい、自席のPCからファイルサーバに",
    "アクセスしたようです。",
    "p",

    ":2_3_0",
    "原「どうかな、高橋くん。",
    "今の話で問題点があるなら指摘してくれ。",
    "p",

    ":1_1_6",
    "高橋「そうですね…",
    "p",

    ":1_1_0",
    "高橋「問題点はあります。それは…",
    "p",
    "*A:清平が機密情報にアクセスできたのが問題_#case62A",
    "*B:清平が自席のPCを使えたのが問題_#case62B",

    //--2A
        "##case62A",
        "+62A",
        "高橋「清平が機密情報を持ち出せたのが問題なんですよ。",
        "p",

        "原「というと？",
        "p",

        "高橋「彼にデータを持ち出せる状態が妥当だったのか…",
        "ということです。",
        "p",

        "高橋「いくらわが課が4人という少人数でも、",
        "アクセス権限は設定しておく必要があったと思います。",
        "p",

        "高橋「機密情報にアクセスしたければ、",
        "事前に原課長の承認が必要…というふうにするんです。",
        "p",

        "原「たしかに、一理あるな。",
        "そのへんの取り決めも不十分だった。",
        "p",
        "#case63",
    //--2B
        "##case62B",
        "+62B",
        "高橋「阿部くん、清平は自席のPCを起動できたのか？",
        "社員用のPCは社員IDとパスワードで認証するんだろう？",
        "p",

        ":2_2_0",
        "阿部（ぎくっ）",
        "p",
        
        "阿部「そ、そうですね。",
        "PCは登録されたIDとパスワードがあれば起動できます。",
        "p",

        "高橋「そうだろう。なら数日前に退職している清平が",
        "PCにログインできたはずがない。",
        "p",

        "高橋「…ヤツのIDがしっかり削除されていたなら、",
        "の話だけどね。",
        "p",

        ":2_3_0",
        "原「課のアカウント管理は阿部くんに任せていたはずだが…？",
        "p",

        ":2_2_2",
        "阿部「…スイマセン！清平さんのID削除が",
        "まだ済んでいませんでした…",
        "p",

        "高橋「…まあ急な話だったしな。",
        "でも、適切に社員情報を取り扱っていれば、少なくとも清平は",
        "自席のPCからデータを持ち出すことはできなかった。",
        "p",

        ":2_3_0",
        "原「なるほど…",
        "p",

        "高橋「とはいえ、誰かのIDとパスワードを入手すれば別のPCから",
        "同様の手口は可能でした。各自、認証情報の取り扱いは",
        "しっかりしなきゃいけませんね。",
        "p",

        "原「そうだな、認証情報の管理について、",
        "もっと厳格にしなければ。",
        "p",
        "#case63",
    //--3
    "##case63",
    ":1_1_0",
    ":2_3_0",
    "原「…なるほど、とにかく清平くんのアカウント管理に",
    "問題があったわけだ。",
    "p",

    "高橋「まず見直すべきはそこだと思います。",
    "p",

    "高橋「あとは…持ち出しを防ぐための施策も必要かと。",
    "p",

    "原「ほう、具体的には？",
    "p",
    "*A:情報資産に適切なアクセス権を振り分ける_#case63A",
    "*B:物理的に持ち出せなくする_#case63B",

    //--3A
        "##case63A",
        "+63A",
        "高橋「アカウントの管理と同じように、",
        "情報資産も適切な管理が必要でしょう",
        "p",

        "高橋「機密情報に対してひとつひとつ重要度を定めて、",
        "そのレベルに応じたアクセス権限を",
        "設定する必要があると思います。",
        "p",

        "原「なるほど、それぞれの情報がどれだけ重要かを",
        "把握するためにもその案は悪くないな。",
        "p",
        "#case64",
    //--3B
        "##case63B",
        "+63B",
        ":1_1_4",
        "高橋「まあ、こんな簡単に言うことじゃないんですが…",
        "物理的に持ち出せなくすればいいんですよ。",
        "p",

        "高橋「たとえば機密情報を保管する部屋に入るには",
        "何か認証が必要とか…",
        "p",

        "原「本当に簡単そうに言うじゃないか。",
        "そんなもの大掛かりな装置を用意しなきゃいけないんじゃ…",
        "p",

        ":1_1_0",
        "高橋「でも、手近なところからでも始められると思うんですよ。",
        "単純に機密情報を保管する部屋に施錠するだけでも",
        "外部からの侵入には効果的じゃないですか？",
        "p",

        ":2_2_0",
        "阿部「それは的を射ていると思います。",
        "物理的なセキュリティ対策にはゾーンの考えが大事なんですよ。",
        "p",

        "阿部「重要な情報を保管する場所を区分けして、そこに入るのに",
        "何か障壁を設ける、という考えが重要なポイントです。",
        "p",

        "原「なるほど、内外からの侵入に備えて",
        "物理的な対策はたしかに必要だな。",
        "p",
        "#case64",

    //--4
    "##case64",
    ":1_1_0",
    ":2_3_0",
    "原「…よし、持ち出しを防ぐ方法の検討もついた。",
    "p",

    ":2_2_0",
    "阿部「あとは、今回のような内部不正の再発を防ぐ案ですね。",
    "p",

    ":2_3_0",
    "原「どうだ高橋くん。内部不正はどうすれば防げると思う？",
    "p",

    ":1_1_6",
    "高橋「うーん、そうですね…",
    "p",
    "*A:監視を強化_#case64A",
    "*B:コンプライアンス教育_#case64B",

        //--4A
        "##case64A",
        "+64A",
        ":1_1_0",
        "高橋「原課長、『不正のトライアングル』って",
        "聞いたことありませんか？",
        "p",

        "原「いいや。それはいったい？",
        "p",

        "高橋「組織内で不正が起こるのは",
        "『機会』『動機』『正当化』がそろった時だ、",
        "という言説です。",
        "p",

        "高橋「たとえば、オフィス内に監視カメラが設置されていれば、",
        "単純に犯行が難しくなるでしょう。それだけでなく、",
        "心理的なプレッシャーもかかるはずです。",
        "p",

        "高橋「そうなれば、不正を行うことが難しい環境になるので、",
        "トライアングルのうちの『機会』をつぶせることになります。",
        "p",

        "原「なるほど、それはいい考えだ。",
        "それに常に監視すればサボりも発見できる。",
        "これは一石二鳥だ！",
        "p",

        ":1_1_7",
        "高橋（…こういうプレッシャーも『動機』になるから、",
        "ほどほどにしてもらわないと…）",
        "p",
        "#case6end",
        
        //--4B
        "##case64B",
        "+64B",
        "高橋「えーっと、ここまでくればあとは",
        "根本的な教育なんじゃないでしょうか？",
        "p",

        "原「うーむ、入社時の研修だけでは不十分なのか…？",
        "p",

        ":1_1_0",
        "高橋「普段からルールを順守する意識を習慣づけるようにすれば",
        "いいと思います。",
        "p",

        "原「意識か。",
        "職場にポスターでも掲示するか？",
        "よくある『交通安全』や『火の用心』みたいな…",
        "p",

        "高橋「いいですね。日常からそういったものを",
        "目にする機会を増やすのは有効だと思います。",
        "p",
        "#case6end",

    //--終了
    "##case6end",
    ":1_1_0",
    ":2_3_0",
    "原「…よろしい。",
    "では対策の具体案のも出たので、本日の会議は終了！",
    "p",

    ":1_0_0",
    ":2_0_0",
    "@2",
    "…",
    "p",

    ":1_1_7",
    ":2_2_0",
    "高橋「はあ、ここ最近で事件が起きすぎだよ…",
    "p",

    ":2_2_1",
    "阿部「でも最近、事件の時は高橋さんが中心になって",
    "解決策を考えてくれてますね。そういう積極的なところは",
    "素晴らしいと思いますよ。",
    "p",

    ":1_1_6",
    "高橋「そうか？",
    "そんな自覚ないけどなあ…",
    "p",

    ":1_1_0",
    "高橋（ま、たしかに大事かもな。",
    "こういう事態に対応できる力っていうのも…）",
    "p",


    ":0_0_3",
    ":1_0_0",
    ":2_0_0",

    "人間は必ずミスするものだ。",
    "次にまたどんなことが起こるかわからない。",
    "p",

    "その時にしっかり対応できるよう、",
    "日ごろから意識することは大事かも…？",
    "とにかく明日もがんばろう…",
    "p",

    "",
    "～内部不正編・完～",
    "",
    "p",
    "*お疲れさまでした。クリックして結果を見る_end"
];
