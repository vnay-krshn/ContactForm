function toValidate(){
    var idName=document.getElementById('idname').value
    var idEmail=document.getElementById('idemail').value
    var idPhone=document.getElementById('idphone').value
    var idDescr=document.getElementById('descrId').value

    var errName=document.getElementById('errName')
    var errEmail=document.getElementById('errEmail')
    var errPhone=document.getElementById('errPhone')
    var errDescr=document.getElementById('errDescr')

    var nameCheck = /^[a-zA-Z ]{3,100}$/
    var emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var phoneCheck = /(^$)|(^\d{10}$)/
    
    var flag = true

    if(nameCheck.test(idName)){
        errName.innerHTML = " "
    }
    else{
        errName.innerHTML = "Invalid"
        flag = false
    }
    if(emailCheck.test(idEmail)){
        errEmail.innerHTML = " "
    }
    else{
        errEmail.innerHTML = "Invalid"
        flag = false
    }
    if(phoneCheck.test(idPhone)){
        errPhone.innerHTML = " "
    }
    else{
        errPhone.innerHTML = "Invalid"
        flag = false
    }
    if(idDescr.length>20){
        errDescr.innerHTML = " "
    }
    else{
        errDescr.innerHTML = "Invalid"
        flag = false
    }

    return flag


}

$(document).ready(function(){
    $('#submit').click(function(e){

        flag = toValidate()

        e.preventDefault()

        if(flag == true){
            $.ajax({
                    type:'POST',
                    url : '/completed',
                    dataType:'json',
                    data:{
                        name: $('#idname').val(),
                        email: $('#idemail').val(),
                        phone: $('#idphone').val(),
                        description: $('#descrId').val(),
                        csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                    },
                })
    }
    else
        return
    
    });
})








