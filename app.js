$(document).ready(function() {
    
    var newDivs = 0;
    
    $('.generate').on('click',function(){
        newDivs++;
        addDiv(newDivs);
    });
    $(document).on('click','.remove', function(){
        //console.log('remove clicked');
        $(this).parent().remove();
        
    });
    $(document).on('click','.change', function(){
        //console.log('remove clicked');
        swapColor($(this).parent().attr('id'));
    });
    
    
    
});


function getNewColor() {
    var num1 = Math.round(Math.random()*255).toString(16);
    var num2 = Math.round(Math.random()*255).toString(16);
    var num3 = Math.round(Math.random()*255).toString(16);
    var colors = [num1,num2,num3]
    for (var i=0;i<colors.length;i++){
        var myColor = colors[i];
        if (myColor.length<2){
            myColor += "0";
            console.log(myColor);
        }
    }
    
    return colors.join("");
    
}

function swapColor(id){
    var color1 = $('#'+id).css('background-color');
    var color2 = $('#'+id+' > .change').css('background-color');
    //console.log('color swap '+color1+' with '+color2);
    
    $('#'+id).css('background-color',color2);
    $('#'+id+' > .change').css('background-color',color1);
}

function addDiv(num) {

    var color1 = getNewColor();
    var color2 = getNewColor();

    var htmlString = $(
        '<div id="div'+num+'" class="randDiv" style="background-color:#'+color1+';">'+
            '<span class="divNum">Div Number '+num+'</span>'+
            '<button class="remove">Remove</button>'+
            '<button class="change" style="background-color:#'+color2+'">Change Color</button>'+
        '</div>'
    );

    $('main').append(htmlString);
}