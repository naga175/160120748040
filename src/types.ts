export type DepartureTime = {
    hours:number;
    minutes:number;
    seconds:number;
}

export type SeatsAvailable = {
    sleeper:number;
    AC:number;
}

export type Train = {
    trainName:string;
    trainNumber:string;
    departureTime:DepartureTime;
    seatsAvailable:SeatsAvailable;
    price:SeatsAvailable;
    delayedBy:number;
}