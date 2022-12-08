const TICKET_SEARCH_BTN = document.getElementById("ticket-search");
const FLIGHT_MODE = document.getElementById("flightMode");
const ORIGIN = document.getElementById("origin");
const DESTINATION = document.getElementById("destination");
const START_DATE = document.getElementById("startDate");
const FINISH_DATE = document.getElementById("finishDate");
const PASSENGER_NUMBER = document.getElementById("PassengerNumber");
const FLIGHT_TYPE = document.getElementById("flightType");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const params = Object.fromEntries(urlParams)
const ticketsList = document.getElementById('tickets-wrapper')
const tickets = document.getElementById('tickets-list')
const availableTickets = [
    {
        flightNumber: 2298,
        origin: 'tehran',
        destination: 'istanbul',
        duration: 180,// TODO use to calculate arrival time
        company: 'Qatar Airways',
        takeOff: '20:00',
        startDate: '22/11/2022',
        arrival: '21:00',
        finishDate: '22/11/2022',
        pricePerPerson: 200000,
        numberOfPerson: 4,
        capacity: 100,
        fullPrice: this.numberOfPerson * this.pricePerPerson,
        isCapacityLimited: this.capacity < (this.numberOfPerson * 3),
        flightType: 'Business',
        flightMode: 'twoWay'
    }
]
availableTickets.map(ticket => {
    ticketsList.innerHTML += `
        <div class="mb-2">
                        <div
                                class=" border border-gray-900 flex w-full transform flex-col justify-between rounded-md bg-gray-200  bg-opacity-75 p-6 text-slate-800 transition duration-500 ease-in-out  hover:shadow-lg dark:bg-slate-700 dark:bg-opacity-25 dark:text-slate-300 lg:flex-row lg:p-4">
                            <div class="flex w-full flex-row lg:w-3/12 self-center">
                                <div class="relative flex flex-col">
                                    <div class="flex h-12 w-12 flex-shrink-0 flex-col justify-center rounded-full bg-opacity-50 ">
                                        <img src="assets/img/lufthansa-logo.png"
                                             class="z-10 h-12 w-12 rounded-full shadow hover:shadow-xl"
                                             alt="lufthansa logo"/>
                                        <span class="absolute right-0 top-0 z-20 flex h-3 w-3">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span class="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                                    </div>
                                </div>

                                <div class="mr-4 ">
                                    <div class="w-fullX ">${ticket.company}</div>
                                    <div class="text-sm text-slate-500">شماره پرواز: ${ticket.flightNumber}</div>
                                </div>
                            </div>
                            
                            <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0 md:text-center">${ticket.flightType}</div>

                            <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0 md:text-center">
                                <div class="ml-1">
                                    <div>${ticket.origin}</div>
                                    <div class="text-xl font-bold leading-5 tracking-tight">Dec 20, 2022</div>
                                    <div class="text-sm text-slate-500 ">${ticket.takeOff} GMT+3:30</div>
                                </div>
                            </div>
                            
                            <div class="self-center text-4xl"> &larr; </div>
                            
                            <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0 md:text-center">
                                <div class="ml-1">
                                    <div>${ticket.destination}</div>
                                    <div class="text-xl font-bold leading-5 tracking-tight">Dec 20, 2022</div>
                                    <div class="text-sm text-slate-500 ">${ticket.arrival} GMT+3:30</div>
                                </div>
                            </div>

                            <div class="w-full self-center pt-4 lg:w-1/6 lg:pt-0 md:text-center">
                                <div class="ml-1">
                                    <div class="text-xl font-extrabold leading-5 tracking-tight">
                                        <span class="align-middle">${ticket.numberOfPerson * ticket.pricePerPerson}</span>
                                        <span class="text-[8px]  rounded  py-1 align-middle font-bold uppercase ">ریال</span>
                                    </div>
                                </div>
                            </div>

                            <div class="w-full self-center px-1 pt-4 pb-2 lg:w-1/6 lg:px-0 lg:pt-0 lg:pb-0 md:text-center flex flex-col">
                                <span class=${ticket.capacity > 3 * ticket.numberOfPerson ? 'font-bold' : 'text-red-800'}>${ticket.capacity} نفر</span>
                                <span class=${ticket.capacity < 3 * ticket.numberOfPerson ? 'text-red-800' : 'hidden'} > 3>تعداد بلیط محدود است.</span>
                            </div>


                            <div class=" self-center">
                                <div class="w-32 text-sm bg-green-600 text-white text-center py-1 rounded-lg hover:cursor-pointer">
                                    خرید
                                </div>
                            </div>
                        </div>
                    </div>
    `
})

//******************************************//

FLIGHT_MODE.value = params.flightMode;
ORIGIN.value = params.origin;
DESTINATION.value = params.destination;
PASSENGER_NUMBER.value = params.PassengerNumber;
START_DATE.value = params.startDate;
FINISH_DATE.value = params.finishDate;
FLIGHT_TYPE.value = params.flightType;

TICKET_SEARCH_BTN.addEventListener("click", function() {
    let params = '?'
    // if (!!ORIGIN || !!DESTINATION || !!START_DATE || !!FINISH_DATE){
    //     return;
    // }

    params += 'flightMode='+FLIGHT_MODE.value+'&';
    params += 'origin='+ORIGIN.value+'&';
    params += 'destination='+DESTINATION.value+'&';
    params += 'PassengerNumber='+PASSENGER_NUMBER.value+'&';
    params += 'startDate='+START_DATE.value+'&';
    params += 'finishDate='+FINISH_DATE.value+'&';
    params += 'flightType='+FLIGHT_TYPE.value+'&';

    console.log(params)
    window.location.href ='/tickets.html'+params;
});

function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
        'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    if (value<=0)
        value =1;
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
