// 처음에는 세개의 아이콘이 있음
class Desktop {
    constructor() {                     // 생성자
        console.log("DeskTop 생성");
        new Icon();         // 아이콘, 폴더생성
    }
}

// 일반 아이콘
class Icon {
    constructor() {
        this.setIconId();
        this.mEvent = new Mouse();
    }

    setIconId() {               // 아이콘 배치, 아이콘 id 부여
        const iconCount = document.querySelectorAll(".icon");
        let index = 1;
        console.log(iconCount);
        for (let node of iconCount) {
            node.setAttribute("id", "folder" + index++);
            let buf = index * 100;
            node.style.top = buf + "px";
        }
    }
}

// Mouse Class
class Mouse {
    constructor() {
        this.mouseEvent();
    }

    mouseEvent() {
        window.addEventListener("load", function () {
            const desktop = document.querySelector(".desktop");
            let dragging = false;
            let offset = {x: 0, y: 0};
            let current = null;
            let left = desktop.offsetLeft;
            let top = desktop.offsetTop;

            desktop.onmousedown = function (e) {
                if (e.target.classList.contains("icon") ||
                    e.target.classList.contains("window")) {
                    dragging = true;
                    current = e.target;
                    offset.x = e.offsetX;
                    offset.y = e.offsetY;
                }
            };

            desktop.onmousemove = function (e) {
                if (!dragging) return;
                current.style.left = e.pageX - offset.x - left + "px";
                current.style.top = e.pageY - offset.y - top + "px";
            };

            desktop.onmouseup = function (e) {
                dragging = false;
            };

            desktop.ondblclick = function (e) {
                if (e.target.classList.contains("f")) {  // folder 일때만
                    const window = new Window();
                    window.openWindow(e.target);
                }
            };
        })
    }
}

// 열린 폴더의 화면
class Window {
    constructor() {                         // element : e.target  (Folder 만 들어옴)
        console.log("Window Class");
        this.mEvent = new Mouse();          // Mouse 객체 생성
    }

    openWindow(element) {                  // New Window Open
        console.log(element.getAttribute('class'));
        const window = document.querySelector(".window");
        const name = element.getAttribute("id");
        window.style.visibility = "visible";            // Folder 숨겨 둠 (이게 맞냐..?)
        window.innerHTML =                              // Insert HTML
            "<span class=\'title\'></span>" +
            "<div id=\'xbox\' class=\'xbox\'>" +
            "<span class=\'x\'>X</span>" +
            "</div>";

        const xbox = document.querySelector(".desktop .window .xbox");
        const title = document.querySelector(".desktop .window .title");
        title.innerHTML = name;
        this.closeWindow(window, xbox);
    }

    closeWindow(window, xbox) {
        xbox.onclick = function (e) {
            window.style.visibility = "hidden";
        }
    }
}

new Desktop();