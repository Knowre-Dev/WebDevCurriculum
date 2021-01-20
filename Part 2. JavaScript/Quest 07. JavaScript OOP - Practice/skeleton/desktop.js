// 처음에는 세개의 아이콘이 있음
class Desktop {
    constructor() {                     // 생성자
        this.icon = new Icon();         // 아이콘, 폴더생성
        // this.folder = new Folder();
    }

    // 클릭 된 요소 아이디 얻음
    getID(element) {
        this.icon.Drag(element);
    }
}

// 일반 아이콘
class Icon {
    constructor() {
        this.mEvent = new Mouse();
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
                console.log("Mouse Down");
                if (e.target.classList.contains("icon") ||
                e.target.classList.contains("window")) {
                    dragging = true;
                    current = e.target;             // target Element를 변수에 저장
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
                console.log("Mouse Up");
                dragging = false;
            };

            desktop.ondblclick = function (e) {
                console.log("double click");
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
        console.log(window.getAttribute('class'));
        console.log("정상");
        window.style.visibility = "visible";            // Folder 숨겨 둠 (이게 맞냐..?)
        window.innerHTML =                              // Insert HTML
            "<div class=\'top\'>" +
                "<span class=\'title\'>Folder</span>" +
                "<div id=\'xbox\' class=\'xbox\'>" +
                    "<span class=\'x\'>X</span>" +
                "</div>" +
            "</div>";
        const xbox = document.querySelector(".desktop .window .xbox");
        console.log("XBOX : " + xbox);
        this.closeWindow(window, xbox);

    }

    closeWindow(window, xbox){
        xbox.onclick = function(e) {
            window.style.visibility = "hidden";
        }
    }
}

const myDeskTop = new Desktop();