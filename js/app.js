$(document).foundation()


$('#victim').click(function(){

    $('#report').show('slow');

    return false;
});


$('#victim').click(function(){

    $('#more').show('slow');

    return false;
});


$('#evidence').dblclick(function(){

    $('#replace').hide();
    $('#replacement').show('slow');

    return false;
});

$('#suspects').dblclick(function(){

    $('#replacement').hide();
    $('#wife').show('slow');
    

    return false;
});

$('#wife').mouseenter(function(){

    $('.alibi1').show('slow');

    return false;
});

$('#wife').mouseleave(function(){

    $('.alibi1').hide('slow');

    return false;
});


$('#wife').click(function(){

    $('#wifeguilty').show('slow');
    $('#loverguilty').show('slow');
    $('#lover').show();

    return false;
});

$('#lover').mouseenter(function(){

    $('.alibi2').show('slow');

    return false;
});


$('#lover').mouseleave(function(){

    $('.alibi2').hide('slow');

    return false;
});


$('#wifeguilty').click(function(){

    $('#loverguilty').hide();
    $('#wifeguilty').html('Wife is not guilty. She has an alibi and there is no evidence connecting her to the crime scene.')
    $('#tryagain').show();

    return false;
});



$('#tryagain').click(function(){
    $('#loverguilty').show();
    $('#wifeguilty').show();
    $('#tryagain').hide();

    return false;
});



$('#loverguilty').click(function(){

    $('#wifeguilty').hide();
    $('#foundguilty').show('slow');
    $('#loverguilty').css('background-color','red')
    $('#loverguilty').css('color','black')
    $('#loverguilty').html('That is correct. The lover is guilty. The brown stroke of hair found on the victim belongs to his lover.')


    return false;
});