

export interface Flight {
    id: number| string;
    icao24: string;
    firstSeen: number|string;
    estDepartureAirport: null| string;
    lastSeen: number| string;
    estArrivalAirport: string;
    callsign: string;
    estDepartureAirportHorizDistance: null| number;
    estDepartureAirportVertDistance: null| number;
    estArrivalAirportHorizDistance: number| null;
    estArrivalAirportVertDistance: null| number;
    departureAirportCandidatesCount: null| number;
    arrivalAirportCandidatesCount: null| number;
}