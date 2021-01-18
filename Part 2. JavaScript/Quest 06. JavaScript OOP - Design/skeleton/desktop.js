// 처음에는 세개의 아이콘이 있음
class Desktop {
    constructor() {                     // 생성자
        this.icon = new Icon();         // 아이콘, 폴더생성
        this.folder = new Folder();
    }

    // 클릭 된 요소 아이디 얻음
    getID(element){
        const id = element.getAttribute('class');       // 클릭한 Element 의 class 값 가져옴
        if(id === 'icon'){                                          // icon 인지 Folder 인지 판단함
            this.icon.Drag(element);
        }
        else if(id === 'folder'){
            this.folder.Drag(element);
        }
    }
}

// 일반 아이콘
class Icon {
    constructor() {
        // 아이콘 출력
        this.mEvent = new Mouse();
        // TODO : 화면에 아이콘 뿌려주는 코드?
    }
    Drag(element){
        this.mEvent.mouseEvent(element);
    }
}

// 폴더 아이콘
class Folder extends Icon{          // Open 기능만 추가하면 됨
    constructor() {
        // 폴더 출력
        super();
    }
    Drag(element) {
        super.Drag(element);
    }
}

// 마우스 이벤트
class Mouse{
    constructor(element) {                      // 요소 값
        this.element = element;
    }
    mouseEvent(element){
        element.onmouseup = function (){        // Mouse Up
            console.log("Mouse Up");
            // 드래그가 끝나는 시점
        }
        // 더블 클릭을 했을때
        element.ondblclick = function(){        // Mouse Double Click
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
