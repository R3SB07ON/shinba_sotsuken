//進捗に応じて　時間に応じて（チャット画面のJSファイルから呼び出し）
//タイマー機能　9分　ブラウザのアップデート　タスクとして表示する？

//タスク種類
const taskList = new Array("A","A-1","A-2","A-2-1",
                            "B","B-1","B-2","C","X")
//タスク状態
const stateList = new Array("未発生","未完了","完了","失敗");
//合計タスク数
let t_total = taskList.length;
//達成タスク数
let t_achieve = 0;

//パラメータの初期化
function setState() {
    //最終報告タスク数
    localStorage.setItem('t_last',0);
    for (let index = 0; index < taskList.length; index++) {
      if(taskList[index] == "A" || taskList[index] =="B" || taskList[index] =="C" || taskList[index] =="X"){
        localStorage.setItem(taskList[index],stateList[1]);
      }else{
        localStorage.setItem(taskList[index],stateList[0]);
      }
    }
}

//タスク状態確認
function stateCheck(t_name){
  return localStorage.getItem(taskList[t_name]);
}

//タスク状態変更   タスク配列、状態配列の要素番号
function stateChange(t_name,t_state) {
  localStorage.setItem(taskList[t_name], stateList[t_state]);
}

//完了タスク数の算出
function t_collLast(){
  t_achieve = 0;
  let miss = "";
  for (let index = 0; index < taskList.length; index++) {
    if(localStorage.getItem(taskList[index]) == "完了"){
      t_achieve += 1;
    }
  }
  return t_achieve;
}

//割合
function t_finish(){
  let count = t_collLast() * 100 / t_total ;
  return Math.round(count,2);
}

//