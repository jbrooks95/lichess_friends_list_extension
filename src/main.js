var friendBox = document.getElementsByClassName('friend_box_title')[0];
if(friendBox != null) {
    //calling .click() immediately does not work so it is called
    //on an interval until the friends box has been successfully opened
    var interval = setInterval(function () {
        //ensure lichess has created socket
        if (window.lichess == null || window.lichess.socket == null) {
            return;
        }

        friendBox.click(); 

        //friend box contains <i></i> by default
        //it contains <strong></strong> after being opened
        if (friendBox.firstChild.nodeName !== 'I') {
            clearInterval(interval);
        }
    }, 200);
}
