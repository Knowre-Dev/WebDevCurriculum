// 처음에는 세개의 아이콘이 있음
class Desktop {
    constructor() {                     // 생성자
        this.icon = new Icon();         // 아이콘, 폴더생성
        // this.folder = new Folder();
    }

    // 클릭 된 요소 아이디 얻음
    getID(element){
        this.icon.Drag(element);
    }
}

// 일반 아이콘
class Icon {
    constructor() {
        this.mEvent = new Mouse();
    }
    Drag(element){
        this.mEvent.mouseEvent(element);
    }
}

// 마우스 이벤트
class Mouse{
    constructor(element) {                      // 요소 값
        this.element = element;
        this.mouseEvent(element);
    }

    mouseEvent(element) {
        const icon = document.querySelector('.bt');
        let drag = false;
        let originTop;
        let originLeft;
        let originX;
        let originY;

        icon.addEventListener('mouseup', e=>{
            console.log("Mouse Up!");
        });
        // element.onmousedown = function(){
        //     console.log("Mouse Down");
        //     drag = true;
        //
        // }
        icon.addEventListener('mousedown', e=>{
            console.log("Mouse Down!");
        })
        // 더블 클릭을 했을때
        icon.ondblclick = function(){        // Mouse Double Click
            console.log("Mouse double Click");
            const buf = element.getAttribute('class');
            if(buf === 'folder') {
                this.window = new Window(element);          // 새 창
            }
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
