//検索機能はjudge.jsでくくりだしている
let flag = 0
function popup(){
    if(flag==0){
        document.getElementById("iconarea").style.display="block";
        flag=1;
    }else{
        document.getElementById("iconarea").style.display="none";
        flag=0;
    }
}
