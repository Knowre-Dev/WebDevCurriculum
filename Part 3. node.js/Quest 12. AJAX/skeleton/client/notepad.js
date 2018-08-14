class Notepad {
	/* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
	init() {

	}

	_ajax(url, method, data, header, body){
		fetch(url, {
			method: method,
			data: data
		}).then(res => {
			return res;
		});
	}
};
