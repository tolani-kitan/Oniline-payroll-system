
$('#shelly').click((e) =>{
    e.preventDefault();
    let email = $('#exampleInputEmail1').val();
    let password = $('#exampleInputPassword1').val();
    
    $.ajax({
        url: `http://localhost:3000/admin`,
        method: 'get',
    }).done((e) =>{
        for(let i = 0; i < e.length; i++){
            if(e[i].email === email && e[i].password === password){
                localStorage.setItems('email', email);
                window.location.replace("../employee.html");
                $('#email').val('');
                $('#password').val('');
            }else{
                alert('Authenticate failed');
            }
        }
    })
})