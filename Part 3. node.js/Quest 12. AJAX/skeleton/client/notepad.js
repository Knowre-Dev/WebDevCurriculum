class Notepad {
	/* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
	constructor(){
		this._init();
	}

	_init(){
		this._fetch_files();
		this._btn_event();
	}

	_fetch_files(){
		fetch('http://localhost:8080/files')
		.then(res => res.json())
		.then(result => {
			result.output.map(element => {
				let div = document.createElement('div');
				div.className = 'file';
				let span = document.createElement('span');
				span.innerHTML = element;
				div.appendChild(span);
				this._get_event(div);
				
				document.getElementById('files').appendChild(div);
			});	
		});
	}

	_get_event(div){
		div.onclick = () => {
			let filename = div.children[0].innerHTML;
			fetch('http://localhost:8080/files/' + filename)
			.then(res => res.json())
			.then(result => {
				let textarea = document.getElementById('content_text');
				textarea.value = result.output;
				textarea.name = filename;
				textarea.disabled = false;
			});
		};
	}

	_btn_event(){
		//this._new_event();
		this._save_event();
	}

	_save_event(){
		let btn_save = document.getElementById('save_btn');
		btn_save.onclick = () => {
			let textarea = document.getElementById('content_text');
			fetch('http://localhost:8080/files/' + textarea.name, {
				method: 'POST',
				headers: {
					'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'
				},
				body: textarea.value,
			})
			.then(res => res.json())
			.then(result => {})
		}
	}

	_new_event(){
		let new_btn = document.getElementById('new_btn');

	}
};
