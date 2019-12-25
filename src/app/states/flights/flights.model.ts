

export interface Flight {
    id: number| string;
    icao24: string;
    firstSeen: number;
    estDepartureAirport: null| string;
    lastSeen: number;
    estArrivalAirport: string;
    callsign: string;
    estDepartureAirportHorizDistance: null| number;
    estDepartureAirportVertDistance: null| number;
    estArrivalAirportHorizDistance: number| null;
    estArrivalAirportVertDistance: null| number;
    departureAirportCandidatesCount: null| number;
    arrivalAirportCandidatesCount: null| number;
}