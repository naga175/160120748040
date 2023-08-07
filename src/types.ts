export type DepartureTime = {
    Hours:number;
    Minutes:number;
    Seconds:number;
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