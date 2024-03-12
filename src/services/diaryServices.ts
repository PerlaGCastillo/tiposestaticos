import { DiaryEntry } from '../types'
import diaryData from './diaries'

const diaries: Array<DiaryEntry> = diaryData
export const getEntries = () => diaries

export const addEntry = () => null