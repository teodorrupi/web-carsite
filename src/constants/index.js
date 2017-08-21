/**
 * Created by teodor on 17/08/17.
 */

export const items = [
    { id: 1, brand: "Mercedes Benz", year: 2015, price: 12000, karburant: 'Petrol', location: 'Tirane', getriebe: 'Manual'},
    { id: 2, brand: "Volkswagen", year: 2016, price: 8000, karburant: 'Petrol', location: 'Tirane', getriebe: 'Manual'},
    { id: 3, brand: "Volkswagen", year: 2014, price: 20000, karburant: 'Diesel', location: 'Tirane', getriebe: 'Automatic'}
]

export const opts = {
    brands : [
        {key: 11, label: 'Mercedes Benz', type:'brand', value: 'Mercedes Benz'},
        {key: 12, label: 'Volkswagen', type:'brand', value: 'Volkswagen'}
    ],
    yearFrom: [
        {key: 21, label: '2017', type:"yearFrom", value: 2017},
        {key: 22, label: '2016', type:"yearFrom", value: 2016},
        {key: 23, label: '2015', type:"yearFrom", value: 2015}
    ],
    yearTo: [
        {key: 31, label: '2017', type:"yearTo", value: 2017},
        {key: 32, label: '2016', type:"yearTo", value: 2016}
    ],
    priceFrom: [
        {key: 41, label: '10.000', type:"priceFrom", value: 10000},
        {key: 42, label: '12.000', type:"priceFrom", value: 11000},
        {key: 43, label: '13.000', type:"priceFrom", value: 12000}
    ],
    priceTo: [
        {key: 51, label: '15.000', type:"priceTo", value: 15000},
        {key: 52, label: '16.000', type:"priceTo", value: 16000}
    ],
    karburant: [
        {key: 61, label: 'Petrol', type:"karburant", value: 'Petrol'},
        {key: 62, label: 'Diesel', type:"karburant", value: 'Diesel'},
    ],
    location: [
        {key: 71, label: 'Durres', type:"location", value: 'Durres'},
        {key: 72, label: 'Tirane', type:"location", value: 'Tirane'},
    ],
    getriebe: [
        {key: 81, label: 'Automatic', type:"getriebe", value: 'Automatic'},
        {key: 82, label: 'Manual', type:"getriebe", value: 'Manual'},
    ]
}