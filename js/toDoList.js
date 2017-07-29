

	var input = document.getElementById('input');
	var btn = document.getElementById('btn');
	var todoTag = document.getElementById('todo');
	var completed = document.getElementById('completed');
	var completedBtn = document.getElementById('completedBtn');

	var span = document.createElement('span');
	var removeBtn = document.createTextNode('x');

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

		checkbox.type = 'checkbox';
		span.textContent = str;

		checkbox.addEventListener('click', onCheck);
		li.appendChild(checkbox);
		li.appendChild(span);

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

	btn.addEventListener('click', onInput);

	input.focus();

