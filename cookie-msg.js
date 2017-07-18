function cookieMsg(){
    var cookieMsgWrap = document.createElement('div');
    var cookieMsg = document.createElement('div');
    var cookieMsgBtn = document.createElement('a');
    cookieMsgWrap.style.cssText = 'position:fixed;bottom:0;left:0;width:100%;background:rgba(0, 0, 0, 0.7);text-align:center;padding:10px 15px 15px 15px;border-top:1px solid #ddd;font-size:18px';
    cookieMsg.innerHTML = 'На сайте ведется статистика посещения с помощью cookies. Посещая сайт, вы соглашаетесь с этим';
    cookieMsg.style.cssText = 'color:#fff;padding-bottom:15px';
    cookieMsgWrap.appendChild(cookieMsg);
    cookieMsgBtn.innerHTML = 'Я согласен';
    cookieMsgBtn.style.cssText = 'width:100px;color:#000;background:#fff;border-radius:2px;padding:5px 15px';
    cookieMsgWrap.appendChild(cookieMsgBtn);
    cookieMsgBtn.onclick = function(event) {
        document.body.removeChild(cookieMsgWrap);
        localStorage.setItem('cookie', true);
    }
    document.body.appendChild(cookieMsgWrap);
};
if(!localStorage.getItem('cookie')){cookieMsg()}