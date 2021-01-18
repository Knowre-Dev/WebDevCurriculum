// 바탕 화면
// 처음에는 세개의 아이콘이 있음
class Desktop {
    constructor(background, icon, folder) {  // 생성자
        this.icon = new Icon();
        this.folder = new Folder();
    }
};

// 일반 아이콘
class Icon {
    constructor(icon){
        console.log("Icon 생성");
        this.icon = icon;
    }
    click(){

    }
};

// 폴더 아이콘
class Folder {
    constructor(folder) {
        console.log("Folder 생성");
        this.folder = folder;
    }
    click(){

    }
    doubleClick(){
        console.log("Click!!");
        let window = new Window();
    }
};

// 열린 폴더의 화면
class Window {
    constructor() {
    }
};

let myDeskTop = new Desktop(123);
