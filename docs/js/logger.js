const app = 'clockknock';

class Info {
    constructor(msg, action, now) {
        this.action = action;
        this.message = msg;
        this.date = now;
    }

    toString(){
        return '<tr><td>'+this.action+
        '</td><td>'+this.date+'</td><td>'+
        this.message+'</td></tr>';
    }

}

function logger(action) {
    var ele = document.getElementById('msg')
    msg = ele.value;
    if (msg == '') {
        console.log("{Error} No Message to Log");
        return;
    }
    var now = new Date();
    var date = now.toDateString() + " " + now.toLocaleTimeString();
    var info = new Info(msg,action,date);
    ele.value='';
    newtask(info);
}

function newtask(data) {
    var newrow = document.getElementById("tasklist").insertRow(-1);
    
    //Insert Required Cells into Row
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    cell1.innerHTML = data.action;
    cell2.innerHTML = data.date;
    cell3.innerHTML = data.message;
}

function  clearall(){
    $("table").children().remove();
    
}
