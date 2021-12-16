(function(){
	'use strict';

	var $form = document.querySelector('[data-js="form"]');
	var $search = document.querySelector('[data-js="search"]');
	var $tbody = document.querySelector('[data-js="tbody"]');

	function getIndex(name){
		if(gameWords.indexOf(name) > -1){
			var i = gameWords.indexOf(name);
			return indexes[i];
		}
		
		$search.value = '';
		return false;
	}

	function selectTd( line , column ){
		var tr = $tbody.children[line];
		var td = tr.children[column];
		td.classList.add("color");
		$search.value = '';
	}

	var letters = [
		['v','s','i','a','l','b','e','o','i','c'],
		['i','a','l','v','a','c','i','n','a','o'],
		['r','t','m','a','s','c','a','r','a','v'],
		['u','c','i','f','r','a','c','l','u','i'],
		['s','l','c','o','g','e','e','u','v','d'],
		['i','s','o','l','a','m','e','n','t','o'],
		['a','b','i','s','s','n','o','r','i','s'],
		['n','p','a','n','d','e','m','i','a','z'],
		['z','m','p','e','a','d','s','j','r','l'],
		['f','p','f',"i",'z','e','r','l','o','j']
	];

	var lines = [];

	letters.map(function(item, index){
		lines[index] = document.querySelector('[data-js="line'+ index +'"]');
	});

	letters.forEach(function(item, index){
		letters[index].forEach(function(item){
			lines[index].insertAdjacentHTML('beforeend', '<td>' + item + '</td>');
		});
	});

	var indexes = [ 
		[ [1,3], [1,4], [1,5], [1,6], [1,7], [1,8] ],
		[ [0,9], [1,9], [2,9], [3,9], [4,9] ],
		[ [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8] ],
		[ [5,0], [5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [5,9] ],
		[ [7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8] ],
		[ [8,3], [8,4], [8,5] ],
		[ [9,1], [9,2], [9,3], [9,4], [9,5], [9,6] ],
		[ [0,0], [1,0], [2,0], [3,0], [4,0] ],
	]
	var gameWords = ['vacina','covid','mascara','isolamento','pandemia','ead','pfizer','virus' ];

	$form.addEventListener('submit', function(event){
		event.preventDefault();
		var valueSearch = $search.value;
		var getIndexes = getIndex(valueSearch);
		for(var i = 0; i < getIndexes.length; i++){
			selectTd(getIndexes[i][0], getIndexes[i][1])
		}
	}, false);

}) ();