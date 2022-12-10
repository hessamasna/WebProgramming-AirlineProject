const TICKET_SEARCH_BTN = document.getElementById("ticket-search");
const FLIGHT_MODE = document.getElementById("flightMode");
const ORIGIN = document.getElementById("origin");
const DESTINATION = document.getElementById("destination");
const START_DATE = document.getElementById("startDate");
const FINISH_DATE = document.getElementById("finishDate");
const PASSENGER_NUMBER = document.getElementById("PassengerNumber");
const FLIGHT_TYPE = document.getElementById("flightType");


TICKET_SEARCH_BTN.addEventListener("click", function () {
    let params = '?'
    // if (!!ORIGIN || !!DESTINATION || !!START_DATE || !!FINISH_DATE){
    //     return;
    // }

    params += 'flightMode=' + FLIGHT_MODE.value + '&';
    params += 'origin=' + ORIGIN.value + '&';
    params += 'destination=' + DESTINATION.value + '&';
    params += 'PassengerNumber=' + PASSENGER_NUMBER.value + '&';
    params += 'startDate=' + START_DATE.value + '&';
    params += 'finishDate=' + FINISH_DATE.value + '&';
    params += 'flightType=' + FLIGHT_TYPE.value + '&';

    console.log(params)
    window.location.href = '/tickets.html' + params;
});



function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    if (value <= 0)
        value = 1;
    target.value = value;
}


function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
}

const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
);

decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
});

incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
});

// const airports = [
//     'AUH',
//     'ABV',
//     'AOR',
//     'IKA',
//     'ACH'
// ]
//
// const companies = [
//     'emirates airways',
//     'qatar airways',
//     'lufthansa',
//     'turkish airline',
// ]
// const durations = [
//     60, 90, 120, 180
// ]
// const flightClass = [
//     'economy', 'business', 'firstClass'
// ]
// const MOCK_DATA = [];
//
//
// function ee() {
//
//     for (let i = 0; i < 100; i++) {
//         let tempAirports = airports;
//         const startDate = randomDate();
//         const end = randomDate(startDate)
//         MOCK_DATA.push({
//             id: i + 1,
//             flightNUmber: Math.floor(1000 + Math.random() * 9000),
//             origin: tempAirports[Math.floor((Math.random() * tempAirports.length))],
//             destination: tempAirports[Math.floor((Math.random() * tempAirports.length))],
//             company: companies[Math.floor((Math.random() * companies.length))],
//             duration: durations[Math.floor((Math.random() * durations.length))],
//             takeOff: Math.floor(Math.random() * 24),
//             arrival: Math.floor(Math.random() * 24),
//             startDate: startDate.toISOString().split('T')[0].replaceAll('-','/'),
//             finishDate: end.toISOString().split('T')[0].replaceAll('-','/'),
//             pricePerPerson: Math.floor(Math.random() * (1_000_000 - 600_000 + 1) + 600_000),
//             capacity: Math.floor(Math.random() * (110 - 20 + 1)) + 20,
//             flightType: flightClass[Math.floor((Math.random()*flightClass.length))]
//         })
//     }
// }
//
//
// // navigator.clipboard.write(data)
//
// function randomDate(start=new Date(2022,12,10)) {
//     const end= new Date(2023,12,0);
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }
// ee();
// console.log(MOCK_DATA)