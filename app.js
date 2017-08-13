

$('#first-name').parent().append('<p id="firstname-error"></p>');
$('#last-name').parent().append('<p class="lastname-error"></p>');
$('#mobile-number').parent().append('<p class="mobilenumber-error"></p>');

var answers = [];
$('button[type="submit"]').click(function(e){
	e.preventDefault()
	var nombre = $('#first-name').val();
	var apellido = $('#last-name').val();
	var celular = $('#mobile-number').val();

	if(nombre == ""){
		$('#first-name').parents().filter('.form-group').addClass("has-error");
		$('#firstname-error').html('Este campo es necesario para registrar un nuevo invitado.');
	} else if(nombre.match(/^[a-zA-Z]/)){
		$('#first-name').parents().filter('.form-group').addClass("has-error");
		$('#firstname-error').html('Este campo solo puede contener caracteres alfabeticos.');
	} else if(nombre.length < 3){
		$('#first-name').parents().filter('.form-group').addClass("has-error");
		$('#firstname-error').html('Este campo debe contener mínimo 3 caracteres alfabeticos.');		
	} else if(nombre.length > 20){
		$('#first-name').parents().filter('.form-group').addClass("has-error");
		$('#firstname-error').html('Este campo debe contener máximo 20 caracteres alfabeticos.');	
	} else {
	 	$('#first-name').parents().filter('.form-group').removeClass("has-error");
		$('#firstname-error').html('');
		answers.push(nombre);
	}
	return answers;


	if(apellido == ""){
		$('#last-name').parents().filter('.form-group').addClass("has-error");
		$('#lastname-error').html('Este campo es necesario para registrar un nuevo invitado.');
	} else if(apellido.match(/^[a-zA-Z]/)){
		$('#last-name').parents().filter('.form-group').addClass("has-error");
		$('#lastname-error').html('Este campo solo puede contener caracteres alfabeticos.');
	} else if(apellido.length < 4){
		$('#last-name').parents().filter('.form-group').addClass("has-error");
		$('#lastname-error').html('Este campo debe contener mínimo 4 caracteres alfabeticos.');		
	} else if(apellido.length > 20){
		$('#last-name').parents().filter('.form-group').addClass("has-error");
		$('#lastname-error').html('Este campo debe contener máximo 20 caracteres alfabeticos.');	
	} else {
	 	$('#last-name').parents().filter('.form-group').removeClass("has-error");
		$('#lastname-error').html('');
		answers.push(apellido);
	}
	return answers;

	if(celular == ""){
		$('#mobile-number').parents().filter('.form-group').addClass("has-error");
		$('#mobilenumber-error').html('Este campo es necesario para registrar un nuevo invitado.');
	} else if(celular.match(/[A-Za-z]/)){
		$('#mobile-number').parents().filter('.form-group').addClass("has-error");
		$('#mobilenumber-error').html('Este campo solo puede contener caracteres alfabeticos.');
	} else if(celular.length < 10){
		$('#mobile-number').parents().filter('.form-group').addClass("has-error");
		$('#mobilenumber-error').html('Este campo debe contener mínimo 10 caracteres alfabeticos.');		
	} else if(celular.length > 11){
		$('#mobile-number').parents().filter('.form-group').addClass("has-error");
		$('#mobilenumber-error').html('Este campo debe contener máximo 10 caracteres alfabeticos.');	
	} else {
	 	$('#mobile-number').parents().filter('.form-group').removeClass("has-error");
		$('#mobilenumber-error').html('');
		answers.push(celular);
	}
	return answers;

	$('table tbody').append('<tr><td>' + answers[0] + '</td><td>' + answers[1] + '</td><td>' + answers[3] + '</td></tr>');
});

