
import { City } from './cities.model';


export const cities: City[] = [
    {
        id: 1,
        airport: 'Hartsfield-Jackson Atlanta International Airport',
        name: 'Atlanta',
        code: 'ATL',
        passengers: 107394029,
        description: `Remaining in pole position, with an increase of 3.3 per cent on 2017,
        Atlanta may have been bypassed by Chicago O’Hare on aircraft movements, but on passenger numbers, it reigns supreme.
        Retaining the title since 1997, it looks like ATL is going nowhere for now.`,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/ATL.jpg'
    },{
        id: 2,
        name: 'Beijing',
        airport: 'Beijing Capital International Airport',
        code: 'PEK',
        description: `
        Retaining its place at number two, Beijing has seen an increase of over 5 per cent since 2017,
        but as Beijing Daxing nears completion, competition in the area is surely set to increase.
        I wonder if we will see more than one Beijing-based airport this time next year?`,
        passengers: 100983290,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/beijing-capital.jpg'
    },{
        id: 3,
        name: 'Dubai',
        airport: 'Dubai International Airport ',
        code: 'DXB',
        description: `
        Remaining in the bronze medal position, Dubai continues to grow as an airport.
        Having welcomed 900,000 passengers in 2018, the steady growth of DXB has seen a 1 per cent increase on 2017’s figures.
        As Dubai continues to be a very popular holiday destination we expect DXB to remain in the top five for years to come.
        `,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/DXB-1.jpg',
        passengers:  89189387
    }, {
        id: 4,
        name: 'London',
        airport: 'London Heathrow',
        code: 'LHR',
        description: `
            Hedging into the top 10, Heathrow saw an increase of 2.7 per cent on 2017.
            Whilst the controversy continues around the expansion, and the construction of the third runway,
            it doesn’t seem to have put passengers off travelling through Europe’s largest Hub airport.
            With Brexit still looming the role LHR will play in a post-Brexit Britain is still uncertain,
             as with everything surrounding Article 50.
        `,
        passengers: 80126320,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/LHR.jpg'
    }, {
        id: 5,
        name: 'Hong Kong',
        airport: 'Hong Kong International Airport',
        code: 'HKA',
        description: `
            Seeing an increase of 2.6 per cent, the world’s largest terminal building has seen a 14.4 per cent decrease in air cargo,
            but quite the opposite in passenger traffic.
            The 2030 Hong Kong International Airport Master Plan will see the facilitation of this sustained growth.
        `,
        passengers: 74517402,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/HKG.jpg'
    }, {
        id: 6,
        name: 'Paris',
        airport: 'Paris Charles de Gaulle Airport',
        code: 'CDG',
        description: `
            The automated baggage sorting system and conveyor to speed luggage delivery time for airlines operating within the hub,
            and the planned rail connection with CDG Express, all promote the addition of new links,
            and in turn, welcome new passengers to the terminal,
            with a 4.0 per cent increase on 2017, CDG is going nowhere from this top 20 anytime soon.
        `,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/CDG.jpg',
        passengers: 72229723
    }, {
        id: 7,
        name: 'Amsterdam',
        airport: 'Amsterdam Airport Schiphol',
        code: 'AMS',
        description: `
        With the new pier terminal set to be finished this year (2019),
        the predominantly European flights using it will contribute to the 3.7 per centgrowth that AMS witnessed last year.
        Schiphol will further expand the terminal and build a fourth departure
        hall with facilities for both departures and arrivals to facilitate the growth even further.
        `,
        passengers: 71053147,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/AMS.jpg'
    }, {
        id: 8,
        name: 'Delhi',
        airport: 'Indira Gandhi International Airport ',
        code: 'DEL',
        description: `
        With an increase of 10.2 per cent on 2017, the four-step progress that
        New Delhi Airport has made is incredible considering the airport
        was new to the top 20 list in 2017, formerly at number 22.
        With the implementation of Digi Yatra throughout the Indian aviation industry,
        capacity has been increased significantly without effecting efficiency, as evident in their jump up the list yet again.
        ACI released its emerging markets numbers, unsurprisingly, India came second on that list. DEL is definitely one to watch.
        `,
        passengers:  69900983,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/IGI.jpg'
    }, {
        id: 9,
        name: 'Frankfurt',
        airport: 'Frankfurt Airport',
        code: 'FRA',
        description: `
        New Terminal 3 is expected to accommodate up to 25 million passengers and will feature 75 new aircraft positions
        when completely constructed. Its first phase, consisting
        of the main building and two of the planned four piers is hoped to open in 2023.
        The 7.8 per cent passenger increase at Frankfurt is reflected in this structural development.
        `,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/fra-1.jpg',
        passengers: 69510269
    }, {
        id: 10,
        name: 'Istanbul',
        airport: 'Istanbul Atatürk Airport',
        code: 'IST',
        description: `
        The relocation from Atatürk to Istanbul New Airport is due to take place at the beginning of April.
         With a rate of growth of 6.4 per cent on 2017, will this change in airports within the same city bring
         competition which will leave to more than one Istanbul based airport on the list in years to come?
        `,
        picture: 'https://d1t0xk6rn1avc6.cloudfront.net/wp-content/uploads/istanbul-1.jpg',
        passengers: 68192683
    }
];
