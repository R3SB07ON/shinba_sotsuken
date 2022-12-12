window.onload = onLoad;
//ローカルストレージ保存配列
let lsArray = [];
//


function onLoad() {
  //URLパラメータに応じて表示内容を変える
  var param = location.search;
  if(~param.indexOf('?game1')){
    //未完了の特定タスクを失敗にする
    if(task_check(0)){
      stateChange(0,3);
      task_failed("A");
    }
    if(task_check(2)){
      stateChange(2,3);
      task_failed("A-2");
    }
    if(task_check(4)){
      stateChange(4,3);
      task_failed("B");
    }
    if(task_check(8)){
      stateChange(8,3);
      task_failed("X");
    }
    document.getElementById("result2").style.display ="none";
    //達成タスク数取得
    document.getElementById("achieve").textContent = "タスク達成率:" + t_finish() + "%";
    if(t_finish() < 100)  Z_time_over();    //制限時間内に終わらなかった場合

    //予防編限定測定値取得
    //ローカルストレージのキー取得
    for (var i = 0, length = localStorage.length; i < length; ++i) {
      lsArray[i] = localStorage.key(i);
      // lsArray[i][0] = localStorage.getItem(lsArray[i]);
      document.getElementById('copyTarget').value += (lsArray[i] + ":" + localStorage.getItem(lsArray[i]) + ",");
    }

  }else if(~param.indexOf('?game2')){
    document.getElementById("result1").style.display ="none";
    //対応編限定選択履歴取得
    for (var i = 0, length = localStorage.length; i < length; ++i) {
      lsArray[i] = localStorage.key(i);
      // lsArray[i][0] = localStorage.getItem(lsArray[i]);
      document.getElementById('copyTarget').value += (lsArray[i] + ":" + localStorage.getItem(lsArray[i]) + ",");
    }
  }else{
    alert("a");
  }

  //丸めこむ前にデータを取得
  //パラメータ調整（表示用）
  p_collLast();
  
  //グラフ作製
  //予防編グラフ1
  var mydata = {
    labels: ["慎重","冷静","不信","確認","報連相","ルール遵守","日常習慣","危険予測","倫理","洞察","知識","好奇心"],
    datasets: [
      {
        label: 'スコア',
        hoverBackgroundColor: "rgba(255,99,132,0.3)",
        data: [localStorage.getItem(0),localStorage.getItem(1),localStorage.getItem(2),localStorage.getItem(3),localStorage.getItem(4),localStorage.getItem(5),localStorage.getItem(6),localStorage.getItem(7),localStorage.getItem(8),localStorage.getItem(9),localStorage.getItem(10),localStorage.getItem(11)],
      }
    ]
  };

  //予防編グラフ２
  var mydata2 = {
    labels: ["事前","事後"],
    datasets: [
      {
        label: 'スコア',
        hoverBackgroundColor: "rgba(255,99,132,0.3)",
        data: [localStorage.getItem(12),localStorage.getItem(13)],
      }
    ]
  };

  //「オプション設定」
  const options = {
           scales: {
               yAxes: [{
                   ticks: {
                     display: true,
                     suggestedMin: 0,
                     suggestedMax: 100,
                       stepSize: 10,
                       beginAtZero: true
                   }
               }]
           },
           spanGaps: true,
       }

  var canvas = document.getElementById('para1');
  var chart = new Chart(canvas, {

      type: 'bar',  //グラフの種類
      data: mydata,  //表示するデータ
      options: options  //オプション設定

    });

    var canvas = document.getElementById('para2');
    var chart = new Chart(canvas, {

        type: 'bar',  //グラフの種類
        data: mydata2,  //表示するデータ
        options: options  //オプション設定

      });

    var canvas = document.getElementById('para3');
    var chart = new Chart(canvas, {

        type: 'bar',  //グラフの種類
        data: mydata,  //表示するデータ
        options: options  //オプション設定

      });

      var canvas = document.getElementById('para4');
      var chart = new Chart(canvas, {

          type: 'bar',  //グラフの種類
          data: mydata2,  //表示するデータ
          options: options  //オプション設定

        });

}

// function copyToClipboard() {
//   // コピー対象をJavaScript上で変数として定義する
//   var copyTarget = document.getElementById("copyTarget");

//   // コピー対象のテキストを選択する
//   copyTarget.select();

//   // 選択しているテキストをクリップボードにコピーする
//   document.execCommand("Copy");

//   // コピーをお知らせする
//   alert("シミュレーション結果をコピーしました");
// }
