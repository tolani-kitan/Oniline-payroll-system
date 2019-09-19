

$('#shelly').click((e) =>{
    e.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    $.ajax({
        url: `http://localhost:3000/admin`,
        method: 'get',
    }).done((e) =>{
        for(let i = 0; i < e.length; i++){
            if(e[i].email === email && e[i].password === password){
                localStorage.setItems('email', email);
                windows.location.replace('./employee.html');
                $('#email').val('');
                $('#password').val('');
            }
        }
    })
})