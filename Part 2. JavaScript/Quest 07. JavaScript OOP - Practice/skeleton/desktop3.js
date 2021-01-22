class Desktop {
    #dom
    #icons
    #folders

    constructor(dom, initIcon) {
        this.#dom = dom;
        this.#dom.classList.add('desktop');

        this.#icons = [];
        this.#folders = [];
        for (let i = 0; i < initIcon.icon; i++) {
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

    getAutoNewPosition() {
        const totalIcon = this.#icons.length + this.#folders.length;
        return {
            x: 50 * Math.floor(totalIcon / 7),
            y: 50 * (totalIcon % 7)
        };
    }

    newIcon(icon) {
        this.#dom.appendChild(icon.getDom());
        icon.moveIcon(this.getAutoNewPosition());
        this.#icons.push(icon);
    }

    newFolder(icon) {
        this.#dom.appendChild(icon.getDom());
        icon.moveIcon(this.getAutoNewPosition());
        this.#folders.push(icon);
    }
}

// 일반 아이콘
class Icon {
    #dom
    #pushed
    #initCoord
    #mouseCoord

    constructor() {
        this.#prepareDom();
        this.#addEvents();
    }

    getDom() {
        return this.#dom;
    }

    moveIcon(coord) {
        this.#dom.style.left = `${coord.x}px`;
        this.#dom.style.top = `${coord.y}px`;
    }

    #prepareDom() {
        const t = document.querySelector('.template-icon');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.icon');
    }

    #addEvents() {
        new DraggableHandler(this.#dom);
    }
}

class Folder {
    #dom
    #pushed
    #initCoord
    #mouseCoord

    constructor() {
        this.#prepareDom();
        this.#addEvents();
    }

    getDom() {
        return this.#dom;
    }

    moveIcon(coord) {
        this.#dom.style.left = `${coord.x}px`;
        this.#dom.style.top = `${coord.y}px`;
    }

    #prepareDom() {
        const t = document.querySelector('.template-folder');
        const tmpl = document.importNode(t.content, true);
        this.#dom = tmpl.querySelector('.icon');
    }

    #addEvents() {
        new DraggableHandler(this.#dom, { dblClick: true });
    }
}

class DraggableHandler {
    #dom
    #option

    constructor(dom, option = {}) {
        this.#dom = dom;
        this.#option = option;
        this.#addDragAndDrop();
        if (option.dblClick) {
            this.#addDblClick();
        }
    }

    #addDragAndDrop() {
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

    #addDblClick() {
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
