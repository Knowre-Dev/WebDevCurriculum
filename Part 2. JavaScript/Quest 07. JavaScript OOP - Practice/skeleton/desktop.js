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

// 마우스 이벤트
class Mouse {
    // HTML 에서 받아오는게 아님
    constructor() {                      // 요소 값
        this.mouseEvent();
    }

    mouseEvent() {
        window.addEventListener("load", function () {
            let desktop = document.querySelector(".desktop");
            let icon = desktop.querySelector(".icon");
            let dragging = false;
            let offset = {x: 0, y: 0};
            let current = null;
            let left = desktop.offsetLeft;
            let top = desktop.offsetTop;

            desktop.onmousedown = function (e) {
                console.log("Mouse Down");
                if (e.target.classList.contains("icon")) {
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
                console.log("Mouse Up");
            };

            desktop.ondblclick = function(e){
                console.log("double click");
                new Window(e.target);
            }
        })
    }
}

// 열린 폴더의 화면
class Window {
    constructor(element) {
        this.element = element;
        console.log(element.getAttribute('class'));
        this.mEvent = new Mouse();
        this.openWindow();
    }

    openWindow() {
        const a = document.querySelector(".window");
        a.innerHTML = "<h2>Folder 1</h2>";
        a.style.visibility = "visible";
        this.mEvent.mouseEvent();
    }

    closeWindow() {

    }
}
const myDeskTop = new Desktop();