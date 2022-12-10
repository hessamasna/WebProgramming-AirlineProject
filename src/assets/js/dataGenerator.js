const airports = [
    'AUH',
    'ABV',
    'AOR',
    'IKA',
    'ACH'
]
const data = [];

for (let i = 0; i <300 ; i++) {
    let tempAirports = airports;
    data.push({
        id: i +1,
        flightNUmber : Math.floor(1000 + Math.random() * 9000),
        origin
    })
}