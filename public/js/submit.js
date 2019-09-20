
$('#shelly').click((e) => {
    e.preventDefault();
    let email = $('#inputEmail').val();
    let password = $('#inputPassword').val();

    $.ajax({
        url: `http://localhost:3000/admin`,
        method: 'get'
    }).done((e) =>{
        for(let i = 0; i < e.length; i++){
            if(e[i].email === email && e[i].password === password){
                window.location.replace('../employee.html');
            }else{
                alert('Authentication failed');
                window.location.reload();
            }
        }
})

})