import axios from 'axios'
import ToiletSubwayProvider from "../../core/port/ToiletSubwayProvider";
import Toilet from "../../core/model/Toilet";

export default class RatpApiToiletSubwayProvider implements ToiletSubwayProvider {
    async getByLine(line: string){

        const url = "https://data.ratp.fr/api/records/1.0/search/?dataset=sanitaires-reseau-ratp&q=&facet=ligne&facet=station&facet=tarif_gratuit_payant&facet=accessible_au_public&facet=coord_geo"

        const result = await axios.get(url).then((response) => {
            return response.data.records.filter((toilet) => toilet.fields.ligne === line)
        })

        return result.map((toilet) => {
                return new Toilet({longitude: toilet.geometry.coordinates[0], latitude: toilet.geometry.coordinates[1]}, toilet.fields.accessible_au_public, toilet.fields.tarif_gratuit_payant, toilet.fields.station)
            })
    }
}