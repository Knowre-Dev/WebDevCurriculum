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

    Drag(element) {
        this.mEvent.mouseEvent(element);
    }
}

// 마우스 이벤트
class Mouse {
    // HTML 에서 받아오는게 아
    constructor() {                      // 요소 값
        this.a = '1';
        this.drag = null;
        this.originTop = null;
        this.originLeft = null;
        this.originX = null;
        this.originY = null
        this.mouseEvent();
    }

    determiningValue(value) {
        return (value.classList.contains('f'));
    }

    getPositioningValue(node, e) {
        this.originTop = node.offsetTop;
        this.originLeft = node.offsetLeft;
        this.originX = e.clientX;
        this.originY = e.clientY;
    }

    setPositioningValue(node, e){
        const diffX = e.clientX - this.originX;
        const diffY = e.clientY - this.originY;
        const desktopBox = document.querySelector('.desktop').getBoundingClientRect();
        const smallBox = node.getBoundingClientRect();
        console.log(desktopBox);
        console.log(smallBox);
        // Math.min(Math.max(최소위치, resultX), 최대위치)
        const resultTop = Math.min(
            Math.max(0, this.originTop + diffY),
            desktopBox.height - smallBox.height
        );
        const resultLeft = Math.min(
            Math.max(0, this.originLeft + diffX),
            desktopBox.width - smallBox.width
        );
        console.log(resultTop+'px');
        node.style.top = `${resultTop}+px`;
        node.style.left = `${resultLeft}+px`;
    }

    mouseEvent() {
        const classNode = document.querySelectorAll('.iconImg');     // NodeList
        console.log(classNode);

        for (let node of classNode) {
            node.addEventListener('mousedown', e => {
                this.drag = true;
                this.getPositioningValue(node, e);
            })

            document.addEventListener('mouseup', e => {
                this.drag = false;
            })

            document.addEventListener('mousemove', e => {
                if (this.drag) {
                    console.log("move");
                    this.setPositioningValue(node, e);
                }
            })

            node.addEventListener('dblclick', e => {
                console.log("Mouse double Click");
                if (this.determiningValue(node)) {
                    this.window = new Window();
                }
            })
        }
    }
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
