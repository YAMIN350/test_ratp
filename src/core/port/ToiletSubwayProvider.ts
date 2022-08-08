import Toilet from '../model/Toilet'

export default interface ToiletSubwayProvider {
    getByLine(line: string): Promise<Toilet[]>
}