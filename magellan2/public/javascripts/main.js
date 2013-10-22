$(document).ready(function(){
    var locations = ['/canaryislands','/capeverde','/straitofmagellan','/guam','/philippines']
    var leg = 0
    $('h4').on('click',function(){
        $.get(locations[leg],function(data){
            $('#here').html(data)
            leg++
            if(leg===locations.length){
                $('h4').remove()
            }
        })
    })
})