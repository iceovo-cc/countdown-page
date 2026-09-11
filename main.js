const target = new Date('2026-10-01 00:00:00');
function countDown(){
    const now = new Date();
    const diff = target - now;
    if(diff <= 0){
        document.getElementById('time').innerText = "时间已到！";
        return;
    }
    const d = Math.floor(diff/(1000*60*60*24));
    const h = Math.floor(diff/(1000*60*60)%24);
    const m = Math.floor(diff/(1000*60)%60);
    const s = Math.floor(diff/1000%60);
    document.getElementById('time').innerText = `${d}天 ${h}时 ${m}分 ${s}秒`;
}
countDown();
setInterval(countDown,1000);
