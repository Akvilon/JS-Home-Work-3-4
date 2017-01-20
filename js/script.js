

var page = {


	meth1 : function() {
		var h3 = document.createElement('h3');
		h3.innerHTML = 'Тест по программированию';
		h3.style.paddingLeft = '240px';
		document.body.appendChild(h3);
	},

	meth2 : function() {
		var mainOl = document.createElement('ol');
		mainOl.classList.add('main-list');
		mainOl.style.paddingLeft = '100px';
		document.body.appendChild(mainOl);
	},

	meth3 : function() {
		var mainLi1 = document.createElement('li');
		mainLi1.classList.add('quest1');
		mainLi1.innerHTML = 'Вопрос №1';
		mainLi1.style.fontSize = '16px';
		mainLi1.style.paddingTop = '20px';
		mainLi1.style.paddingBottom = '15px';
		var mainList = document.querySelector('.main-list');
		mainList.appendChild(mainLi1);
	},

	meth4 : function() {
		var mainLi2 = document.createElement('li');
		mainLi2.classList.add('quest2');
		mainLi2.innerHTML = 'Вопрос №2';
		mainLi2.style.fontSize = '16px';
		mainLi2.style.paddingTop = '15px';
		mainLi2.style.paddingBottom = '15px';
		var mainList = document.querySelector('.main-list');
		mainList.appendChild(mainLi2);
	},

	meth5 : function() {
		var mainLi3 = document.createElement('li');
		mainLi3.classList.add('quest3');
		mainLi3.innerHTML = 'Вопрос №3';
		mainLi3.style.fontSize = '16px';
		mainLi3.style.paddingTop = '15px';
		mainLi3.style.paddingBottom = '15px';
		var mainList = document.querySelector('.main-list');
		mainList.appendChild(mainLi3);
	},

	meth6 : function() {
		var form1 = document.createElement('form');
		form1.classList.add('first-form');
		var mainList = document.querySelector('.main-list');
		mainList.insertBefore(form1, mainList.children[1]);
	},

	meth7 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox1'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.first-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox1');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №1'));
	},
	
	meth8 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox2'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.first-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox2');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №2'));
	},

	meth9 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox3'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.first-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox3');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №3'));
	},

	meth10 : function() {
		var form2 = document.createElement('form');
		form2.classList.add('second-form');
		var mainList = document.querySelector('.main-list');
		mainList.insertBefore(form2, mainList.children[3]);
	},

	meth11 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox4'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.second-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox4');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №1'));
	},
	
	meth12 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox5'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.second-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox5');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №2'));
	},

	meth13 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox6'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.second-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox6');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №3'));
	},

	meth14 : function() {
		var form3 = document.createElement('form');
		form3.classList.add('third-form');
		var mainList = document.querySelector('.main-list');
		mainList.appendChild(form3);
	},

	meth15 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox7'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.third-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox7');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №1'));
	},
	
	meth16 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox8'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.third-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox8');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №2'));
	},

	meth17 : function() {
		element = document.createElement("label");
		element.classList.add('checkbox9'); 
    	element.style.fontWeight = 'normal';
    	element.style.display = 'block';
    	var el = document.querySelector('.third-form');
    	el.appendChild(element);

  
    	var element = document.createElement('input');
		element.type = "checkbox";
		element.style.marginTop = '9px';
		element.style.marginLeft = '10px';
		element.style.marginRight = '10px';
		var el = document.querySelector('.checkbox9');
		el.appendChild(element);
		el.append(document.createTextNode('Вариант ответа №3'));
	},

	meth18 : function() {
		var element = document.createElement('button');
		element.classList.add('btn', 'btn-primary', 'btn-lg');
		element.innerHTML = 'Проверить мои результаты';
		element.style.marginLeft = '120px';
		element.style.marginTop = '40px';
		element.style.paddingLeft = '30px';
		element.style.paddingRight = '30px';
		element.style.border = "2px solid black";
		element.style.color = "black";
		element.style.backgroundColor = "#cfe2f3";
		element.style.borderRadius = "0";
		var mainList = document.querySelector('.main-list');
		mainList.appendChild(element);
	}

}

page.meth1();
page.meth2();
page.meth3();
page.meth4();
page.meth5();
page.meth6();
page.meth7();
page.meth8();
page.meth9();
page.meth10();
page.meth11();
page.meth12();
page.meth13();
page.meth14();
page.meth15();
page.meth16();
page.meth17();
page.meth18();



