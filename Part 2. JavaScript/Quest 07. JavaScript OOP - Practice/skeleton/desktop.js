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
        let drag = false;
        let originTop;
        let originLeft;
        let originX;
        let originY;
        const classNode = document.querySelectorAll('.icon');     // NodeList
        const box = document.querySelector('.box');
        // for (let node of classNode) {
            box.addEventListener('mousedown', e => {
                drag = true;
                originTop = box.offsetTop;
                originLeft = box.offsetLeft;
                originX = e.clientX;
                originY = e.clientY;
                console.log("Mouse down");
            })
            document.addEventListener('mouseup', e => {
                drag = false;
                console.log("Mouse Up");
            })
            document.addEventListener('mousemove', e => {
                if (drag) {
                    const diffX = e.clientX - originX;
                    const diffY = e.clientY - originY;
                    const desktopBox = document.querySelector('.desktop')
                        .getBoundingClientRect();
                    const smallBox = box.getBoundingClientRect();

                    // Math.min(Math.max(최소위치, resultX), 최대위치)
                    const resultTop = Math.min(
                        Math.max(0, originTop + diffY),
                        desktopBox.height - smallBox.height
                    );

                    const resultLeft = Math.min(
                        Math.max(0, originLeft + diffX),
                        desktopBox.width - smallBox.width
                    );
                    box.style.top = `${resultTop}px`;
                    box.style.left = `${resultLeft}px`;
                }
            });
            //
            // node.addEventListener('dblclick', e => {
            //     console.log("Mouse double Click");
            //     if (this.determiningValue(node)) {
            //         this.window = new Window();
            //     }
            // })
        }
    // }
}

// 열린 폴더의 화면
class Window {
    constructor(element) {
        this.element = element;
        console.log("Windows Object");
    }

    openWindow() {

    }

    closeWindow() {

    }
}

const myDeskTop = new Desktop();

// TODO : Folder 지우는 것 고려
// TODO : 10~ 16 Line 지우는 것 고려
