$(document).ready(function(){
	$('#add-container').on('click', 'button', function(){
		var value = $('#add-container input').val();
		var html = '<div class="item">\
			<div class="remove">X</div>' + value +'</div>';
		$('#places-container').append(html);
	});

	$('#places-container').on('click', '.remove', function(){
		var parent = $(this).parent().remove();
	});
});
