
$('#shelly').click((e) =>{
    alert("hello")
    e.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    $.ajax({
        url: `http://localhost:3000/admin`,
        method: 'get',
    }).done((e) =>{
        for(let i = 0; i < e.length; i++){
            if(e[i].email === Email && e[i].password === Password){
                localStorage.setItems('email', email);
                windows.location.replace('./employee.html');
                $('#email').val('');
                $('#password').val('');
            }
        }
    })
})