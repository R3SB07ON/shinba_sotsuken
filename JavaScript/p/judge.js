//ブラウザ画面と検索結果一覧画面で適用

function judgeflag1(text) {
    if(text.match(/ニュース/) || text.match(/にゅーす/)){
      return 1;
    }
    return 0;
  }
  
  function judgeflag2(text){
    if(text.match(/株価/) || text.match(/かぶか/) || text.match(/カブカ/)){
      return 1;
    }
    return 0;
  }
  
  function judge(){
    let text = document.getElementById("searchtext").value;
    localStorage.setItem("f_searchstr",localStorage.getItem("f_searchstr") + text + "**");
    if(text.length < 1){
      ;
    }else if(text.length < 20){ //検索文字数が一般的数量のとき
      let flag1 = judgeflag1(text);  //ニュース系統の文字列を検出で「1」
      let flag2 = judgeflag2(text);  //株価系統の文字列を検出で「1」
  
      if(flag1 == 1 && flag2 == 1){ //vr3
        B1_access_except_page();   //タスクに無関係の状態で検索
        window.location.href = "./searchlist.html?vr3";  
      }else if(flag1 == 1 && flag2 == 0){ //vr1(ニュース)
        B1_access_except_page();
        window.location.href = "./searchlist.html?vr1";
      }else if(flag1 == 0 && flag2 == 1){  //vr2(株価)
        B2_access_except_page();
        window.location.href = "./searchlist.html?vr2";
      }else if(flag1 == 0 && flag2 == 0){ //vr4
        Z_task_disrelation_search();
        window.location.href = "./searchlist.html?vr4";
      }
    }else{  //検索文字数が過剰に多いとき
      window.location.href = "./searchlist.html?vr4";
    }
  }