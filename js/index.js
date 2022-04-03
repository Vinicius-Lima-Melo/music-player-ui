

$(document).ready(function() {
	$("#btn-abrir-form-conta").click(function() {
		$(".pop-up").css('visibility', 'visible');
		$("#modal-nova-conta").fadeIn(200);
	});

	$("#btn-abrir-form-login").click(function() {
		$(".pop-up").css('visibility', 'visible');
		$("#modal-login").fadeIn(200);
	});

	$(".close-modal").click(function(){
		closeModal();
	})
});

// Fechar modal ao clicar na tela
window.onclick = function(event) {
	console.log(event.target)
  	if (event.target == bgModal) {
    	closeModal();
  	}
}


function closeModal(){
	$(".modal").css('display', 'none');
	$(".pop-up").css('visibility', 'hidden');
}






