interface GpsCoordinates {
    latitude: string
    longitude: string
}

export default class Toilet {
    constructor(private readonly gpsCoordinates: GpsCoordinates,
                private readonly publiclyAvailable: "oui" | "non",
                private readonly rateType: "gratuit" | "payant",
                private readonly stationName: string) {
    }
}