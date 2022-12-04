const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const params = Object.fromEntries(urlParams)
console.log(params);
// const hmmmmmm = () => {
//     for (let i = 0; i < 10 ; i++) {
//         return `<div> ${i} <div/>`
//     }
// }
const ticketsList =document.getElementById('tickets-list')
// ticketsList.appendChild(hmmmmmm())
for (let i = 0; i < 10 ; i++) {
    ticketsList.innerHTML = `
        <div>${i}<div/>
    `
}