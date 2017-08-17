/**
 * Created by teodor on 17/08/17.
 */

export const items = [
    { id: 1, brand: "Mercedes Benz", year: 2015},
    { id: 2, brand: "Volkswagen", year: 2016},
    { id: 3, brand: "Volkswagen", year: 2014}
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
    ]
}