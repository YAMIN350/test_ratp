import ToiletSubwayProvider from "../port/ToiletSubwayProvider";

export default class GetAvailableToilets {
    constructor(private readonly toiletSubwayProvider: ToiletSubwayProvider) {
    }

    async byLine(line: string) {
        return await this.toiletSubwayProvider.getByLine(line);
    }
}