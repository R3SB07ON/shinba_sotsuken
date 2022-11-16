let url;
let param;


function move(){  
    url = "./documentR.html" + location.search;
    window.location.href = url;    
}

function save() {
    let filename = "file_" + params.get("file");
    localStorage.setItem(filename,document.getElementById("textarea").value);
}

window.onload = onLoad;
function onLoad(){
    url = new URL(window.location.href);
    params = url.searchParams;

    //資料名表示
    let elm = document.getElementById("filename");
    elm.innerHTML = params.get("file");

    //保存内容の反映
    let filename = "file_" + params.get("file");
    document.getElementById("textarea").value = localStorage.getItem(filename);
}