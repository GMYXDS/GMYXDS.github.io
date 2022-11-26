var now = new Date;

function update_time(){
    var time_update = document.getElementById("time_update");
    var distans = document.getElementById("distans");
    var boardsignid = document.getElementById("boardsignid");
    var status_src = '/svg/statuson.svg'
    if(time_update==null)return;
    now.setTime(now.getTime() + 1e3);
    var e = new Date("08/01/2022 00:00:00"),
        t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
        a = (t / 1496e5).toFixed(6),
        r = new Date("08/09/2022 00:00:00"),
        o = (now - r) / 1e3 / 60 / 60 / 24,
        i = Math.floor(o),
        n = (now - r) / 1e3 / 60 / 60 - 24 * i,
        s = Math.floor(n);
    1 == String(s).length && (s = "0" + s);
    var l = (now - r) / 1e3 / 60 - 1440 * i - 60 * s,
        g = Math.floor(l);
    1 == String(g).length && (g = "0" + g);
    var d = (now - r) / 1e3 - 86400 * i - 3600 * s - 60 * g,
        c = Math.round(d);
    1 == String(c).length && (c = "0" + c);
    var time_update_s = `本站居然运行了 ${i} 天 ${s} 小时 ${g} 分 ${c} 秒`;
    var distans_s = ` 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀 `;
    if(s < 18 && s >= 9){
        // status_src = 'https://img.shields.io/badge/GM%E5%B0%8F%E5%B1%8B-%E6%90%AC%E7%A0%96%E4%B8%AD-6adea8?style=social&logo=cakephp';
        status_src = '/svg/statuson.svg';
    }else{
        // status_src = 'https://img.shields.io/badge/GM%E5%B0%8F%E5%B1%8B-%E4%BC%91%E6%81%AF%E4%B8%AD-6adea8?style=social&logo=coffeescript';
        status_src = '/svg/statusoff.svg';
    }
    time_update.innerText = time_update_s;
    distans.innerText = distans_s;
    if(status_src.split("/")[status_src.split("/").length-1] != boardsignid.src.split("/")[boardsignid.src.split("/").length-1]) boardsignid.src = status_src;
}
function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("08/01/2022 00:00:00"),
        t = Math.trunc(234e8 + (now - e) / 1e3 * 17),
        a = (t / 1496e5).toFixed(6),
        r = new Date("08/09/2022 00:00:00"),
        o = (now - r) / 1e3 / 60 / 60 / 24,
        i = Math.floor(o),
        n = (now - r) / 1e3 / 60 / 60 - 24 * i,
        s = Math.floor(n);
    1 == String(s).length && (s = "0" + s);
    var l = (now - r) / 1e3 / 60 - 1440 * i - 60 * s,
        g = Math.floor(l);
    1 == String(g).length && (g = "0" + g);
    var d = (now - r) / 1e3 - 86400 * i - 3600 * s - 60 * g,
        c = Math.round(d);
    1 == String(c).length && (c = "0" + c);
    let h = "";
    h = s < 18 && s >= 9 ? `<img class='boardsign' id ='boardsignid' src='/svg/statuson.svg' title='距离月入25k也就还差一个大佬带我~'><br> <span id ='time_update'>本站居然运行了 ${i} 天 ${s} 小时 ${g} 分 ${c} 秒</span> <i id="heartbeat" class='fas fa-heartbeat'></i> <br><span id ='distans'> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀 </span><br> 再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨ ` : `<img class='boardsign' id ='boardsignid' src='/svg/statusoff.svg' title='下班了就该开开心心的玩耍，嘿嘿~'><br><span id ='time_update'>本站居然运行了 ${i} 天 ${s} 小时 ${g} 分 ${c} 秒 </span><i id="heartbeat" class='fas fa-heartbeat'></i> <br><span id ='distans'>旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀</span><br> 再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨ `, document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = h)
}
setTimeout(() => {
    createtime();
}, 1e3);
setInterval((() => {
    // createtime()
    update_time();
}), 1e3);