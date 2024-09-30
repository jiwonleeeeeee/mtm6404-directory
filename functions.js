//1 List function
function list(clients) {
    return clients.map((client, index) => `
        <li class="list-group-item d-flex justify-content-between" data-index="${index}">
            ${client.name}
            <strong>$${client.balance}</strong>
        </li>
    `).join('');
}


//2 Order function 
function order(clients, property) {
    return clients.sort((a, b) => {
        if (a[property]<b[property]) return -1;
        if (a[property]>b[property]) return 1;
        return 0;
    });
}


//3 Total function
function  total(clients) {
    return clients.reduce((sum, client) => sum + client.balance, 0);
}


//4 Info function
function info(index) {
    return clients.find((client, i) => i === index);
}


//5 Search function
function search(query) {
    return clients.filter(client => client.name.toLowerCase().includes(query.toLowerCase()));
}