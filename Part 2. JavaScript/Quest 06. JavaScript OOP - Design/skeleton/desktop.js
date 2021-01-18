// 바탕 화면
// 처음에는 세개의 아이콘이 있음
class Desktop {
    constructor(x, y) {  // 생성자
        this.initX = x;
        this.initY = y;
        this.icon = new Icon();         // 아이콘, 폴더생성
        this.folder = new Folder();
    }

    // 클릭 된 요소 아이디 얻음
    getID(element){
        let id = element.getAttribute('class');     // 클릭한 Element 의 class 값 가져옴
        console.log(id);
        if(id === 'icon'){
            this.icon.Drag(element);
        }else{
            this.folder.Drag(element);
        }
    }
};

// 일반 아이콘
class Icon {
    constructor() {
        this.mEvent = new Mouse();
        // TODO : 화면에 아이콘 뿌려주는 코드?
    }
    Drag(element){
        this.mEvent.mouseEvent(element);
    }
};

// 폴더 아이콘
class Folder extends Icon{          // Open 기능만 추가하면 됨
    constructor() {
        super();

    }
};

// 열린 폴더의 화면
class Window {
    constructor() {

    }

    openWindow() {

    }

};

class Mouse{
    constructor(element) {
        this.element = element;
    }
    mouseEvent(element){
        element.onmouseup = function (){        // 마우스 땠을때
            console.log("Mouse Up");
        }
        element.onmousemove = function(){        // 마우스 벗어났을
            console.log("Mouse move")
        }
    }
}

// let myDeskTop = new Desktop(Array.from(Array(10), () => new Array(15).fill(0)));
const myDeskTop = new Desktop(10,20);
