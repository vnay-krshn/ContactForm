$('#submit').on('submit','#idForm',function(e){
    e.preventDefault();

    $.ajax({
        type:'post',
        url : 'api/contactapp',
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

