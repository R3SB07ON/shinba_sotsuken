//凍結

//予防編時間管理画面以外で適用
//チャット画面のみ時間
//時間管理機能（指定時間で画面終了）
// let fin2 = function close(){
//     if(localStorage.getItem("time") <= 0){
//         let url = location.pathname;
//         if(url.match(/result.html/) == null && url.match(/time.html/) == null){
//             window.close();
//         }
//     }
// }

// let time2 = 1000;
// setInterval(fin2,time2)

//予防編時間管理画面と結果画面以外で適用
let finclo = function close(){
    if(localStorage.getItem("finish")){
        window.close();
    }
}
setInterval(finclo,1000);