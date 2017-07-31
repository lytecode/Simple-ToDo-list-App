

	var input = document.getElementById('input');
	var addBtn = document.getElementById('addBtn');
	var todoTag = document.getElementById('todo');
	var completed = document.getElementById('completed');
	var completedBtn = document.getElementById('completedBtn');


	/*
	* @return: (String) str
	*/

	var onInput = function(){
		var str = input.value.trim();

		if (str.length > 0) {

			todo.appendChild(makeLiElement(str));

			input.value = '';
			input.focus();
		}
	}


	function makeLiElement(str){
		var li = document.createElement('li');
		var checkbox = document.createElement('input');
		var span = document.createElement('span');

		var closeSpan = document.createElement('span');
		var closeBtn = document.createElement('button');
		
		closeBtn.innerHTML = 'x';
		closeSpan.id = 'close';
		closeSpan.appendChild(closeBtn);

		checkbox.type = 'checkbox';
		span.textContent = str;

		li.appendChild(checkbox);
		li.appendChild(span);
		li.appendChild(closeSpan);

		checkbox.addEventListener('click', onCheck);

		closeBtn.addEventListener('click', close);

		return li;
	}


	function onCheck(event){
		var checkBoxParent = event.target.parentElement;
		var listParentId = checkBoxParent.parentElement.id;

		if(listParentId === 'todo'){
			completed.appendChild(checkBoxParent);
		}
		else if(listParentId === 'completed'){
			todo.appendChild(checkBoxParent);
		}
	}

	function close(event){
		var closeBtnParent = event.target.parentElement;
		var closeLiElement = closeBtnParent.parentElement;
		closeLiElement.style.display = 'none';
	}


	input.addEventListener('keyup', function(event){
		var code = event.keyCode;

		if (code === 13){
			onInput();
		}
	});


	function hideShow(){
		var completeUl = completed;


		if (completeUl.style.display === 'none'){
			completeUl.style.display = 'block';

			completedBtn.textContent= "COMPLETED TO-DOS";
		}
		else{
			completeUl.style.display = 'none';

			completedBtn.textContent= "SHOW COMPLETED TO-DOS";
		}
	}


	completedBtn.addEventListener('click', hideShow);

	addBtn.addEventListener('click', onInput);

	input.focus();

