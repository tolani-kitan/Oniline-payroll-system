//alert("heyyo")
$('#lenny').click ((e) =>{
    e.preventDefault();
    let first_Name = $('#firstN').val();
    let last_Name = $('#lastN').val();
    let gender = $('#gender').val();
    let age = Number($('#age').val());
    let email = ($('#email').val());
    let address = $('#address').val();
    let city = $('#city').val();
    let department = $('#dept').val();
    let level = Number ($('#level').val());


    $.ajax ({
        url: 'http://localhost:3000/users',
        method: 'post',
        data: {
            first_Name, last_Name, gender, age: Number(age), email, address, city, department, level: Number(level), status: false
        }
    }).done((e) => {
        localStorage.setItem('email', email);
        window.location.replace('./employee.html')
        $('#age').val('');
        $('#firstN').val('');
        $('#lastN').val('');
        $('#gender').val('');
    Number($('#age').val(''));
        $('#email').val('');
        $('#address').val('');
        $('#city').val('');
        $('#dept').val('');
    Number($('#level').val(''));

    alert("Employee was added successfully");
    })
})
