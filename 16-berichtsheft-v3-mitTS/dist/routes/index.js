import express from 'express';
const router = express.Router();
/* GET home page. */
router.get('/', (_req, res) => {
    res.render('index', { title: 'Berichtsheft' });
});
export default router;
