import { DiaryEntry, NonSensitiveInfo } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if (entry != null) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined
}

export const getEntriesWithoutSensitiveeInfo = (): NonSensitiveInfo[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id, date, weather, visibility
        }
    })
}

export const addEntry = (): undefined => undefined