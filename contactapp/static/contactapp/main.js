var showTable= document.querySelector('.table')
var showButton = document.querySelector("#show")
showTable.style.visibility="hidden"

showButton.addEventListener('click',function(e){
    e.preventDefault()
    showTable.style.visibility="visible"
})

function toValidate(){
    var name = document.querySelector("idname").value 
    var email = document.querySelector("idemail").value
    var phone = document.querySelector("idphone").value
    var descr = $('#descrId').val()

    var checkName = /^[a-zA-Z]{3,100}$/
    var checkEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/
    var checkPhone = /(^$)|(^\d{10}$)/
    var descrCheck = /^.{20,}$/
    var f = true

        if (checkName.test(name)){
            console.log("all ok")
        }
        else{
            alert("invalid name")
            f = false
        }

        if (checkEmail.test(email)){
            console.log("all ok")
        }
        else{
            alert("invalid email")
            f = false
            }

        if (checkPhone.test(phone)){
            console.log("all ok")
        }
        else{
            alert("invalid phone")
            f = false
        }

        if (descrCheck.test(descr)){
            console.log("all ok")
        }
        else{
            alert("invalid descr")
            f = false
        
        }
    return f
}


$(document).ready(function(){
    $('#submit').click(function(e){
        var flag=toValidate()
        e.preventDefault()
        if(flag==true){
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
        }
    })
})


