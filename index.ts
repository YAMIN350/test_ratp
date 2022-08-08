import express from 'express'
import GetAvailableToilets from "./src/core/usecase/getAvailableToilets";
import RatpApiToiletSubwayProvider from "./src/infrastructure/api/RatpApiToiletSubwayProvider";

const app = express()
const port = 3000

app.get('/toilets/:line/available', async (req, res) => {
    const {line} = req.params;
    const getAvailableToilets = await new GetAvailableToilets(new RatpApiToiletSubwayProvider())

    getAvailableToilets.byLine(line).then((response) => res.send(response))

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
