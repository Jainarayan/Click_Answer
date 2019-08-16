	var count = 0;
	    correct = 0;
	    incorrect = 0;
		correct_count = 0;
		audioCorrect = false; 
		
	const audio1 = new Audio('./audio/intro_1.mp3');
	const audio2 = new Audio('./audio/Click2-Sebastian-1.mp3');
	const audio3 = new Audio('./audio/Correct.mp3');
	const audio4 = new Audio('./audio/Incorrect.mp3');		
		 
	$('#iframe2, #iframe3').hide();
	$('#hideContainer').show();
	
  	$('.option-click').hide();   
	
	$('#mainStart').click(function(){
		$('#startContainer').hide();
		audio1.play();		
	})
	
	$('.options').mouseover(function(){
		audio2.play();
	})
	
	$('#answer-1, #answer-2').click(function(){
		correct_count++;		
	})
		
	$('.options').click(function(){
		count++;
		if($(this).hasClass('correct')){
			correct++;	
			corr();	
			$(this).children('.option-click').show();	
			$(this).unbind('click');	
			$(this).css({'cursor': 'default'});	
		}
		if($(this).hasClass('incorrect')){
			incorrect++;
			incorr();
			$(this).children('.option-click').show();
			$(this).unbind('click');
			$(this).css({'cursor': 'default'});
		}		
		if(correct == 3){
			$(audio3).on('ended', function(){
				$('#mainContainer').hide();
				$('#resultContainer').show();		
				$('#totalCount').text(count);
				$('#totalCorrect').text(correct);
				$('#totalIncorrect').text(incorrect);
			})
		}
		
		$('#show').mouseover(function(){ $('#show-img').attr('src','./images/show-2.png'); audio2.play();})
			      .mouseout(function(){ $('#show-img').attr('src','./images/show-1.png');})
				  .css('cursor', 'pointer');
		$('#show').css('opacity', '1');
	});
	
	$(audio1).on('ended', function(){     
		$('#hideContainer').hide();
	});
		
	function corr(){
		audio3.play();
		$('#hideContainer').show();
		$('#iframe2').show();
		$('#iframe1, #iframe3').hide();
		setTimeout(function(){
			$('#iframe2').hide();
			$('#iframe1').show();
		}, 3500);
		$(audio3).on('ended', function(){
			$('#hideContainer').hide();
		});	
	}	
	
	function incorr(){
		audio4.play();
		$('#hideContainer').show();
		$('#iframe3').show();
		$('#iframe1, #iframe2').hide();
		setTimeout(function(){
			$('#iframe3').hide();
			$('#iframe1').show();
		}, 3000);
		$(audio4).on('ended', function(){     
			$('#hideContainer').hide();
		});
	} 
	
   	$('#answer-option1 .correct').click(function(){
		if(correct_count == 2){
			$('#answer-option1 .incorrect').off();
			$('#answer-option1 .incorrect').css({'cursor': 'default'});	
		}		
	});
	
	$('#answer-option3 .correct').click(function(){
		$('#answer-option3 .incorrect').off();
		$('#answer-option3 .incorrect').css({'cursor': 'default'});		
	}); 
   
	$('#refresh, #result-refresh').click(function(){
		location.reload();
	});
	
	$('#refresh').mouseover(function(){ $('#refresh-img').attr('src','./images/refresh-2.png'); audio2.play(); })
			     .mouseout(function(){ $('#refresh-img').attr('src','./images/refresh-1.png'); })			   
	
	$('#show').click(function(){
		$('.option-click').show();
		$('.incorrect').css('opacity','0.4');	
	});
