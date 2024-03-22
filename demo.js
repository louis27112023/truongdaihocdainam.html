function movesnow() {
        for (i = 0; i <= snowmax; i++) {
            crds[i] += x_mv[i];
            snow[i].posy += snow[i].sink;
            snow[i].style.left = snow[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px';
            snow[i].style.top = snow[i].posy + 'px';
    
            if (snow[i].posy >= marginbottom - 2 * snow[i].size || parseInt(snow[i].style.left) > (marginright - 3 * lftrght[i])) {
                if (snowingzone == 1) {
                    snow[i].posx = randommaker(marginright - snow[i].size);
                }
                if (snowingzone == 2) {
                    snow[i].posx = randommaker(marginright / 2 - snow[i].size);
                }
                if (snowingzone == 3) {
                    snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 4;
                }
                if (snowingzone == 4) {
                    snow[i].posx = randommaker(marginright / 2 - snow[i].size) + marginright / 2;
                }
                snow[i].posy = 0;
            }
        }
        // Gọi lại hàm movesnow() sau một khoảng thời gian để tạo hiệu ứng liên tục
        setTimeout(movesnow, 50);
    }

function initsnow() {
        if (ie5 || opera) {
                marginbottom = document.body.scrollHeight
                marginright = document.body.clientWidth-15
        }
        else if (ns6) {
                marginbottom = document.body.scrollHeight
                marginright = window.innerWidth-15
        }
        var snowsizerange=snowmaxsize-snowminsize
        for (i=0;i<=snowmax;i++) {
                crds[i] = 0;
            lftrght[i] = Math.random()*15;
            x_mv[i] = 0.03 + Math.random()/10;
                snow[i]=document.getElementById("s"+i)
                snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
                snow[i].size=randommaker(snowsizerange)+snowminsize
                snow[i].style.fontSize=snow[i].size+'px';
                snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
                snow[i].style.zIndex=1000
                snow[i].sink=sinkspeed*snow[i].size/5
                if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
                snow[i].style.left=snow[i].posx+'px';
                snow[i].style.top=snow[i].posy+'px';
        }
        movesnow()
}

function movesnow() {
        for (i=0;i<=snowmax;i++) {
                crds[i] += x_mv[i];
                snow[i].posy+=snow[i].sink
                snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
                snow[i].style.top=snow[i].posy+'px';

                if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
                        if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
                        if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
                        if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
                        if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
                        snow[i].posy=0
                }
        }
        var timer=setTimeout("movesnow()",50)
}

for (i=0;i<=snowmax;i++) {
        document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}
if (browserok) {
        window.onload=initsnow
}
// Tạo một hình ảnh tuyết rơi
var snowflake = document.createElement('img');
snowflake.src = 'https://www.example.com/snowflake.png';
snowflake.className = 'snowflake';
document.body.appendChild(snowflake);

// Đặt vị trí ban đầu của tuyết rơi
var initialX = Math.random() * window.innerWidth;
var initialY = -50;
snowflake.style.left = initialX + 'px';
snowflake.style.top = initialY + 'px';

// Di chuyển tuyết rơi và tạo hiệu ứng
function moveSnowflake() {
    initialY += 5; // Tốc độ rơi của tuyết
    snowflake.style.top = initialY + 'px';
    
    if (initialY > window.innerHeight) {
        initialY = -50;
        initialX = Math.random() * window.innerWidth;
        snowflake.style.left = initialX + 'px';
    }
}

// Lặp lại di chuyển tuyết rơi
setInterval(moveSnowflake, 50);