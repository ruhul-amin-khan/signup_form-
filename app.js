$(document).ready(function(){

	$(".signup_body").sortable();
	$(".male, .female").draggable({
		revert: "invalid",
		containment: ".part3"
	});

	$(".drop_box").droppable({

		accept: ".male, .female",
		drop: function(event,ui){
			$(this)
			.addClass("ui-state-highlight")
		}
	});


	$("#submit").click(function(){

		var email = $("#email").val();
		var first_name = $("#first_name").val();
		var last_name = $("#last_name").val();
		var full_name = $("#full_name").val();
		var password = $("#password").val();
		var confirm_password = $("#confirm_password").val();


		if (email == '') {
			$("#msg1").text("Field must be required").addClass("negative");
		}

		if (first_name == '') {
			$("#msg2").text("Field must be required").addClass("negative");
		}

		if (last_name == '') {
			$("#msg3").text("Field must be required").addClass("negative");
		}

		if (full_name == '') {
			$("#msg4").text("Field must be required").addClass("negative");
		}

		if (password == '') {
			$("#msg5").text("Field must be required").addClass("negative");
		}

		if (confirm_password == '') {
			$("#msg6").text("Field must be required").addClass("negative");
		}


	


		
	});


	$("#first_name, #last_name, #password, #confirm_password, #email").keyup(function(){

		var email = $("#email").val();
		var first_name = $("#first_name").val();
		var last_name = $("#last_name").val();
		var full_name = $("#full_name").val();
		var password = $("#password").val();
		var confirm_password = $("#confirm_password").val();

		$("#full_name").val(first_name+'  '+last_name);


		if(password != confirm_password){
			$("#password, #confirm_password").css({
				border : "1px solid red"
			});
		}else{
			$("#password, #confirm_password").css({
				border : "1px solid #ccc"
			});
		}
	});







});