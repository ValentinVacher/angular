export interface LocationHttp{
  id: number
  name: string
  zoneCount: number
  camps: {
    id: number
    name: string
    zone: number
  }[]
}

export interface Location{
  name: string
  zoneCount: number
}

export namespace Location{
  export function mapperLocationHttpToLocation(locationHttp: LocationHttp): Location{
    return {
      name: locationHttp.name,
      zoneCount: locationHttp.zoneCount
    }
  }
}
