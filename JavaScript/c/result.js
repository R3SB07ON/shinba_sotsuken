window.onload = onLoad;

function onLoad() {
  //URLパラメータに応じて表示内容を変える
  var param = location.search;
  if(~param.indexOf('?game1')){
    document.getElementById("result2").style.display ="none";
    //タスク達成率の取得
    document.getElementById("achieve").textContent ="タスク達成率：" + (t_achieve/t_total*100) + "%";
  }else if(~param.indexOf('?game2')){
    document.getElementById("result1").style.display ="none";
  }else{
    alert("a");
  }

  //パラメータ調整
  p_collLast();
  //達成タスク数取得
  t_collLast();

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

  //結果文字列出力
  let resulttext = document.getElementById('copytext')
  for (let index = 0; index < paramList.length; index++) {
    resulttext.innerHTML += (paramList[index] + ':' + localStorage.getItem(index) + ',');
  } ;
}