$.ajax({
    url: 'http://localhost:3000/users',
    method: 'get',
}).done((e)=>{
        console.log(e)
        for (let i = 0; i < e.length; i++){
            $('#tbody').append(
                `<tr>
                <td>${i + 1}
                </td>
                    <td>
                       ${e[i].first_Name} 
                       </td>
                    <td>
                    ${e[i].last_Name} 
                    </td>
                    <td>
                    ${e[i].department}
                    </td>
                    <td>
                        ${e[i].level}
                        </td>
                    <td>
                        ${e[i].Status}
                        <td>
                        <button type="button" class="btn btn-primary" id="del-${e[i].id}" class="delete-btn">Delete</button>
                        </td>
                        <td>
                        <button type="button" class="btn btn-primary edit-btn" id="edt-${e[i].id}">Edit</button>
                        </td>
                        <td>
                        <button type="button" class="btn btn-primary">Pay</button>
                        </td>
                    </tr>`
               
                    )

                }
                $('.delete-btn').on('click',(e)=>{
                    let id = e.target.id.split('del-').join('')
                    alert(id)
                    $.ajax({
                        url:`http://localhost:3000/users/${id}`,
                        method: 'delete'
                    }).done((e)=>{

                    })
                })

            })

            $('#raj').click ((e) =>{
                e.preventDefault();
                window.location.replace('./addEmp.html')
            })


