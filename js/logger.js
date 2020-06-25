const app = 'clockknock';

$(document).ready(function () {
    $('main').hide()
    $('header').hide()

    setTimeout(() => {
        $('main').show()
        $('header').show()
        $('.on_loading').hide()

    }, 2000);


    $('#clearall').click(() => {
        showAlert('#removeAll','.close')
        $("table").children().remove();

    });

    $('#checkin').click(() => {
        logger('In')
    });

    $('#checkout').click(() => {
        logger('Out')
    });

})

class Info {
    constructor(msg, action, now) {
        this.action = action;
        this.message = msg;
        this.date = now;
    }
}

function logger(action) {
    var ele = document.getElementById('msg')
    msg = ele.value;
    if (msg == '') {
        showAlert('#emptyLog','.close')
        return;
    }
    var now = new Date();
    var date = now.toDateString() + " " + now.toLocaleTimeString();
    var info = new Info(msg, action, date);
    ele.value = '';
    newtask(info);
}

function newtask(data) {
    var newrow = document.getElementById("tasklist").insertRow(-1);

    //Insert Required Cells into Row
    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    cell1.innerHTML = data.message;
    cell2.innerHTML = data.date;
    newrow.style.color = 'black'
    newrow.style.background = (data.action == 'In') ? 'green' : 'red'
    showAlert('#newActivity', '.close')
}

function showAlert(alertElement, closebtn, timeout=1000) {
    $(alertElement).show();
    setTimeout(() => {
        $(alertElement).hide('fade');
    }, timeout);
    $(closebtn).click(() => {
        $(alertElement).hide('fade');
    });

}