window.onload = onLoad

function onLoad(){
    table = document.getElementById("mailTable");

    for (let i = 0; i < localStorage.getItem("addmail"); i++) {
        let mail = localStorage.getItem("send" + i).split("*");
        if(mail[3] == ""){
            mail[3] = "件名なし"
        }
        table.innerHTML += 	'<tr id="trmy"><td><a href="mbrowse.html?send'
                            +	i
                            +	'">'
                            +	mail[3]
                            +	'</a></td></tr>';
        
    }
}
