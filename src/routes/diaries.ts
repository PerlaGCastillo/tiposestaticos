import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveeInfo())
})

router.get('/:id', (req, res) => {
    const diary = diaryServices.findById(+req.params.id)
    return (diary != null)
    ? res.send(diary)
    : res.sendStatus(404)
})
router.post('/', (_, res) => {
    res.send('saving a diary')
})

export default router