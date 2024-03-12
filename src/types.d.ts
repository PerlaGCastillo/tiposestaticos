export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

//interfaz esta pensada para ser extendida
export interface DiaryEntry{
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

// interface SpecialDiaryEntry extends DiaryEntry{
//     flightNumber: number
// }