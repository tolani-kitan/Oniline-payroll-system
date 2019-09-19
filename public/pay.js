function sleep(milliseconds){
    var start = new Date()
}

$('#payAll').click(function(event){
    event.preventDefault();

    // $.get("http://localhost:3000/payRoll", function(pData){
    //     //Data is returned
    //     for (let i = 0; i< pData.length; i++){
    //         //inner loop to get user profile
    //         $.get("http://localhost:3000/users", function(userData){
    //             for (let j = 0; j < userData.length; j++){
    //             if (pData[i].levelID == userData[j].level){
    //                 //to post
    //                 console.log(typeof(userData[j].salary))
    //                 console.log(typeof(pData[i].Amount))
    //                 currentSalary = Number(userData[j].salary)
    //                 toBePaid = Number(pData[i].Amount)
    //                 const sum = currentSalary + toBePaid
    //                 const paidDate = new Date();
    //                 paidString = "Last Paid On: " + String(paidDate).slice(0, 24)
    //                 console.log(paidString)
    //                 const update = {
    //                     first_Name: userData[j].first_Name,
    //                     last_Name: userData[j].last_Name,
    //                     gender: userData[j].gender,
    //                     age: userData[j].age,
    //                     email: userData[j].email,
    //                     address : userData[j].address,
    //                     city: userData[j].city,
    //                     department: userData[j].department,
    //                     level: userData[j].level,
    //                     Status: paidString,
    //                     salary: sum
    //                 }
                    
    //                 nUrl = "http://localhost:3000/users/" + userData[j].id

    //                 console.log(update)
    //                 //put here
    //                 $.ajax({
    //                     url: nUrl,
    //                     method: "put",
    //                     dataType: "json",
    //                     data: update,
    //                     success: function(){
    //                         console.log("Salary Paid")
    //                     }

    //                 })

    //             }
    //             }
    //         })
    //     }
    // }) 


    
})
