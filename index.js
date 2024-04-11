// Add your code here

function submitData(name,email) {
    let data = {
        name: name,
        email: email
    };

    let configData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    };

    return fetch('http://localhost:3000/users', configData)      
        .then(resp => resp.json())
        .then(data => {
            let id = data.id;
            document.body.innerHTML += `<p> New user ID: ${id}</p>`;
        })
        .catch(error => {
            document.body.innerHTML += `<p>Error: ${error.message}</p>`
        });


}

submitData('Kay', 'kay@kay.com');