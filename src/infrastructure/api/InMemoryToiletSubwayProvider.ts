import ToiletSubwayProvider from "../../core/port/ToiletSubwayProvider";
import Toilet from "../../core/model/Toilet";

export default class InMemoryToiletSubwayProvider implements ToiletSubwayProvider {
    getByLine(line: string): Promise<Toilet[]> {
        return new Promise((resolve, reject) => {
            resolve([new Toilet(
                {
                    latitude: '49.394342"',
                    longitude: '98.395925',
                },
                "oui",
                "gratuit",
                'Bercy',
            ),
                new Toilet(
                    {
                        latitude: '10.3230342"',
                        longitude: '91.405925',
                    },
                    "non",
                    "payant",
                    'Gare de Lyon',
                )])
        })
    }
}