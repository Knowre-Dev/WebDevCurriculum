class Desktop {
    #dom            // Private Field
    #icons
    #folders

    // 생성자
    constructor(dom, initIcon) {
        this.#dom = dom;                        // 각 화면의 dom 초기화
        this.#dom.classList.add('desktop');     // classList에 desktop 추가

        this.#icons = [];                       // Array
        this.#folders = [];
        for (let i = 0; i < initIcon.icon; i++) {       // Icon, Folder 개수 파악
            this.newIcon(new Icon());
        }
        for (let i = 0; i < initIcon.folder; i++) {
            this.newFolder(new Folder());
        }
    }

    importIconDom(iconDom) {
        console.info(iconDom);
        this.#dom.appendChild(iconDom);
    }

    //Icon 자리 배치 Return : x, y 값
    getAutoNewPosition() {
        const totalIcon = this.#icons.length + this.#folders.length;    // 아이콘 갯수
        return {
            // x, y 축 Return
            x: 50 * Math.floor(totalIcon / 7),      // floor : 소수점 자르고 정수 반환
            y: 50 * (totalIcon % 7)
        };
    }

    // New Icon
    newIcon(icon) {                     // Parameter : Icon DOM
        this.#dom.appendChild(icon.getDom());       // icon 의 DOM 을 얻어 Desktop DOM 에 붙임
        icon.moveIcon(this.getAutoNewPosition());   // icon 포지셔닝
        this.#icons.push(icon);                     // icon DOM push
    }

    // New Folder
    newFolder(icon) {
        this.#dom.appendChild(icon.getDom());
        icon.moveIcon(this.getAutoNewPosition());
        this.#folders.push(icon);
    }
}

// 일반 아이콘
class Icon {
    #dom                    // Private Field
    constructor() {         // 생성자
        this.prepareDom();  //
        this.addEvents();   // 합성 클래스 호출 메서드
    }

    // Icon DOM 얻음 Return : Icon DOM
    getDom() {
        return this.#dom;
    }

    // Icon 이동
    moveIcon(coord) {
        this.#dom.style.left = `${coord.x}px`;
        this.#dom.style.top = `${coord.y}px`;
    }

    // Template DOM 얻은 후 활성화
    prepareDom() {
        const t = document.querySelector('.template-icon');     // template DOM Select
        const tmpl = document.importNode(t.content, true);         // template 활성화 및 포함
        this.#dom = tmpl.querySelector('.icon');                // template icon 선택한 뒤 지역 dom 에 포함
    }

    // 합성 Class Object 생성 Argument : Icon template DOM
    addEvents() {
        new DraggableHandler(this.#dom);
    }
}

// Folder Class
class Folder {
    #dom                        // Private Field

    constructor() {             // 생성자
        this.prepareDom();      // icon 과 같음
        this.addEvents();
    }

    getDom() {
        return this.#dom;
    }

    moveIcon(coord) {
        this.#dom.style.left = `${coord.x}px`;
        this.#dom.style.top = `${coord.y}px`;
    }

    prepareDom() {
        const t = document.querySelector('.template-folder');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.icon');
    }

    addEvents() {
        new DraggableHandler(this.#dom, { dblClick: true });
    }
}

class DraggableHandler {
    #dom
    #option

    constructor(dom, option = {}) {
        this.#dom = dom;
        this.#option = option;
        this.addDragAndDrop();
        if (option.dblClick) {
            this.addDblClick();
        }
    }

    addDragAndDrop() {
        this.#dom.addEventListener('mousedown', e => {
            let pushed = true;
            let mouseCoord = {
                x: e.clientX,
                y: e.clientY
            };
    
            const mouseMoveEvent = document.addEventListener('mousemove', e => {
                if (pushed) {
                    const currCoord = {
                        x: Number(this.#dom.style.left.replace('px', '')),
                        y: Number(this.#dom.style.top.replace('px', ''))
                    };
                    const destCoord = {
                        x: currCoord.x + e.clientX - mouseCoord.x,
                        y: currCoord.y + e.clientY - mouseCoord.y
                    };
    
                    this.#dom.style.left = `${destCoord.x}px`;
                    this.#dom.style.top = `${destCoord.y}px`;
    
                    mouseCoord = {
                        x: e.clientX,
                        y: e.clientY
                    };
                }
            });
    
            const mouseUpEvent = document.addEventListener('mouseup', () => {
                pushed = false;
                document.removeEventListener('mousemove', mouseMoveEvent);
                document.removeEventListener('mouseup', mouseUpEvent);
            });
        });
    }

    addDblClick() {
        this.#dom.addEventListener('dblclick', e => {
            console.info(e);
        });
    }
}


// // Mouse Class
// class Mouse {
//     constructor() {
//         this.mouseEvent();
//     }

//     mouseEvent() {
//         window.addEventListener("load", function () {
//             const desktop = document.querySelector(".desktop");
//             let dragging = false;
//             let offset = {x: 0, y: 0};
//             let current = null;
//             let left = desktop.offsetLeft;
//             let top = desktop.offsetTop;

//             desktop.onmousedown = function (e) {
//                 if (e.target.classList.contains("icon") ||
//                     e.target.classList.contains("window")) {
//                     dragging = true;
//                     current = e.target;
//                     offset.x = e.offsetX;
//                     offset.y = e.offsetY;
//                 }
//             };

//             desktop.onmousemove = function (e) {
//                 if (!dragging) return;
//                 current.style.left = e.pageX - offset.x - left + "px";
//                 current.style.top = e.pageY - offset.y - top + "px";
//             };

//             desktop.onmouseup = function (e) {
//                 dragging = false;
//             };

//             desktop.ondblclick = function (e) {
//                 if (e.target.classList.contains("f")) {  // folder 일때만
//                     const window = new Window();
//                     window.openWindow(e.target);
//                 }
//             };
//         })
//     }
// }

// // 열린 폴더의 화면
// class Window {
//     constructor() {                         // element : e.target  (Folder 만 들어옴)
//         console.log("Window Class");
//         this.mEvent = new Mouse();          // Mouse 객체 생성
//     }

//     openWindow(element) {                  // New Window Open
//         console.log(element.getAttribute('class'));
//         const window = document.querySelector(".window");
//         const name = element.getAttribute("id");
//         window.style.visibility = "visible";            // Folder 숨겨 둠 (이게 맞냐..?)
//         window.innerHTML =                              // Insert HTML
//             "<span class=\'title\'></span>" +
//             "<div id=\'xbox\' class=\'xbox\'>" +
//             "<span class=\'x\'>X</span>" +
//             "</div>";

//         const xbox = document.querySelector(".desktop .window .xbox");
//         const title = document.querySelector(".desktop .window .title");
//         title.innerHTML = name;
//         this.closeWindow(window, xbox);
//     }

//     closeWindow(window, xbox) {
//         xbox.onclick = function (e) {
//             window.style.visibility = "hidden";
//         }
//     }
// }
