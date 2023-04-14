function initializeDesktop(numIcons, numFolders) {
	const desktop = document.getElementById('desktop');
  
	// 생성자를 통해 받은 아이콘과 폴더의 개수만큼 아이콘과 폴더를 생성합니다.
	for (let i = 1; i <= numIcons; i++) {
	  const icon = document.createElement('div');
	  icon.classList.add('icon');
	  icon.style.top = `${i * 80}px`;
	  icon.style.left = '50px';
	  desktop.appendChild(icon);
  
	  // 각각의 아이콘에 이벤트 핸들러를 등록합니다.
	  icon.addEventListener('mousedown', onIconMouseDown);
	}
  
	for (let i = 1; i <= numFolders; i++) {
	  const folder = document.createElement('div');
	  folder.classList.add('folder');
	  folder.style.top = `${i * 80}px`;
	  folder.style.left = `${i * 80}px`;
	  desktop.appendChild(folder);
  
	  // 각각의 폴더에 이벤트 핸들러를 등록합니다.
	  folder.addEventListener('mousedown', onFolderMouseDown);
	}
  }

let isDragging = false;
let dragElement = null;
let offset = { x: 0, y: 0 };

function onIconMouseDown(event) {
  isDragging = true;
  dragElement = event.target;
  offset.x = event.clientX - dragElement.offsetLeft;
  offset.y = event.clientY - dragElement.offsetTop;

  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', onDragEnd);
}

function onFolderMouseDown(event) {
  isDragging = true;
  dragElement = event.target;
  offset.x = event.clientX - dragElement.offsetLeft;
  offset.y = event.clientY - dragElement.offsetTop;

  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', onDragEnd);
}

function onDrag(event) {
  if (!isDragging) return;

  dragElement.style.left = `${event.clientX - offset.x}px`;
  dragElement.style.top = `${event.clientY - offset.y}px`;
}

function onDragEnd() {
  isDragging = false;
  dragElement = null;

  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', onDragEnd);
}
function onFolderDoubleClick(event) {
	const folder = event.target;
	const folderWindow = document.createElement('div');
	folderWindow.classList.add('window');
	folderWindow.style.top = `${folder.offsetTop}px`;
	folderWindow.style.left = `${folder.offsetLeft}px`;
	desktop.appendChild(folderWindow);
  
	const folderContents = document.createElement('div');
	folderContents.classList.add('folder-contents');
	folderWindow.appendChild(folderContents);
  
	// 폴더의 내용물을 생성합니다.
	// ...
  
	// 창을 드래그하여 이동할 수 있도록 이벤트 핸들러를 등록합니다.
	folderWindow.addEventListener('mousedown', onWindowMouseDown);
  }
  
  function onWindowMouseDown(event) {
	isDragging = true;
	dragElement = event.target.parentElement;
	offset.x = event.clientX - dragElement.offsetLeft;
	offset.y = event.clientY - dragElement.offsetTop;
  
	document.addEventListener('mousemove', onDrag);
	document.addEventListener('mouseup', onDragEnd);
  }
  function initializeDesktop(rootElement, numIcons, numFolders) {
	const desktop = document.createElement('div');
	desktop.classList.add('desktop');
	rootElement.appendChild(desktop);
  
	// ...
  }
  