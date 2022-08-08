import {describe, expect, it} from 'vitest'
import Toilet from "../model/Toilet";
import GetAvailableToilets from "./getAvailableToilets";
import InMemoryToiletSubwayProvider from "../../infrastructure/api/InMemoryToiletSubwayProvider";

describe('getAvailableToilets', () => {

    const toiletProvider = new InMemoryToiletSubwayProvider()
    const getAvailableToilets = new GetAvailableToilets(toiletProvider)

    describe('should get available toilets with simple line name', () => {
        it('when promise resolve is done', async () => {
            const result = await getAvailableToilets.byLine("13")
            expect(result).toStrictEqual([new Toilet(
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
    })
})