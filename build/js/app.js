function createNode(element) {
    return document.createElement(element); 
}

function append(parent, el) {
    return parent.appendChild(el); 
}

const ul = document.getElementById('users');

fetch('https://reqres.in/api/users?page=1&per_page=10')
    .then(response => response.json())
    .then(data => {
        let users = data.data;

        return users.map(function(user) {
            let li = createNode('li')
                span = createNode('span');
                img = createNode('img')

            li.innerHTML = user.first_name + ' ' + user.last_name;
            img.src = user.avatar
            span.innerHTML = user.email;

            append(li, span);
            append(li, img);
            append(ul, li);

        });
    })