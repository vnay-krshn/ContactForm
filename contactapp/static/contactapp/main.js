$('#submit').on('submit','#idForm',function(e){
    e.preventDefault()
    $.ajax({
        type:'post',
        url : 'api/contactapp',
        dataType:'json',
        data:{
            name: $('#idname').val(),
            email: $('#idemail').val(),
            phone: $('#idphone').val(),
            description: $('#descrId').val(),
            csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
        },
        success: function(){
            alert("Bingo")
        }
    })

});

var showTable= document.querySelector('.table')
var showButton = document.querySelector("#show")
showTable.style.visibility="hidden"

showButton.addEventListener('click',function(e){
    e.preventDefault()
    showTable.style.visibility="visible"
})



