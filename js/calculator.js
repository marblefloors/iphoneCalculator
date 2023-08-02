document.addEventListener('DOMContentLoaded', function(){
	let form = document.querySelector('.calculator')
	form.addEventListener('submit', function(e){
		e.preventDefault()
	})
	let res_field = document.querySelector('.output')

	let btn_num = document.querySelectorAll('.btn')
	let btn_reset = document.querySelector('.clear')
	let btn_calc = document.querySelector('.eqSign')

	for(i=0; i < btn_num.length; i++){
		btn_num[i].addEventListener('click', function(e){
			e.preventDefault()
			res_field.value += this.innerHTML;
		})
	}

	btn_reset.addEventListener('click', function(e){
		e.preventDefault()
		res_field.value = '';
	})

	btn_calc.addEventListener('click', function(e){
		e.preventDefault()
		res_field.value = eval(res_field.value);
	})
})