var response = document.querySelector(".response")

function toValidate() {
    var idName = document.getElementById('idname').value
    var idEmail = document.getElementById('idemail').value
    var idPhone = document.getElementById('idphone').value
    var idDescr = document.getElementById('descrId').value

    var errName = document.getElementById('errName')
    var errEmail = document.getElementById('errEmail')
    var errPhone = document.getElementById('errPhone')
    var errDescr = document.getElementById('errDescr')

    var nameCheck = /^[a-zA-Z ]{3,100}$/
    var emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    var phoneCheck = /(^$)|(^\d{10}$)/

    var flag = true

    if (nameCheck.test(idName)) {
        errName.innerHTML = " "
    } else {

        if (idName == '') {
            errName.innerHTML = "Cannot leave empty"
        } else {

            if ( false == isNaN(idName)) {
                errName.innerHTML = "Invalid name"
            } else {
                errName.innerHTML = "Must contain more than 3 characters"
            }
        }
        flag = false
    }


    if (emailCheck.test(idEmail)) {
        errEmail.innerHTML = " "
    } else {

        if (idEmail == '') {
            errEmail.innerHTML = "Cannot leave empty"
        } else {
            errEmail.innerHTML = "Invalid email format"
        }
        flag = false
    }


    if (phoneCheck.test(idPhone)) {
        errPhone.innerHTML = " "
    } else {
        errPhone.innerHTML = "Invalid format. Minimum 10 characters required "
        flag = false
    }


    if (idDescr.length > 20) {
        errDescr.innerHTML = " "
    } else {

        if (idDescr.length == 0) {
            errDescr.innerHTML = "Cannot leave empty"
        } else {
            errDescr.innerHTML = "Minimum 20 characters required"
        }
        flag = false
    }

    if (flag) {
        $('.response').css('color', 'green')
        response.innerHTML = "Form submitted successfully"
    } else {
        $('.response').css('color', 'red')
        response.innerHTML = "Error occured"
    }

    return flag


}

function getData() {
    $.ajax({
        type: 'get',
        url: '/fetch',
        data: {
            name: $('#idname').val(),
            email: $('#idemail').val(),
            phone: $('#idphone').val(),
            description: $('#descrId').val(),
        },

        success: function (response) {
            var contactList = document.querySelector('.contactList')
            contactList.innerHTML = response
            $('#idForm').trigger('reset')
        }
    })
}

$(document).ready(function () {
    getData()
    $('#submit').click(function (e) {
        e.preventDefault()

        var flag = toValidate()

        if (flag) {

            $.ajax({
                type: 'post',
                url: '/completed',
                dataType: 'json',
                data: {
                    name: $('#idname').val(),
                    email: $('#idemail').val(),
                    phone: $('#idphone').val(),
                    description: $('#descrId').val(),
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                },
                success: getData()
            })

        }

    });
})








