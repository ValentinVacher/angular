import {Ailment, AilmentHttp} from "./ailment.model";

export interface MonsterHttp {
  id: number
  name: string
  type: string
  species: string
  description: string
  elements: string[]
  ailments: AilmentHttp[]
  locations: {
    id: number
    name: string
    zoneCount: number
    camps: {
      id: number
      name: string
      zone: number
    }[]
  }[]
  resistances: {
    element: string
    condition: string
  }[]
  weaknesses: {
    element: string
    stars: number
    condition: string
  }[]
  rewards: {
    id: number
    items: {
      id: number
      name: string
      description: string
      rarity: number
      carryLimit: number
      value: number
    }
    condition: {
      type: string
      subtype: string
      rank: string
      quantity: number
      chance: number
    }
  }[]
}

export interface Monster {
  id: number
  name: string
  type: string
  species: string
  description: string
  elements: string[]
  ailments: Ailment[]
  locations: {
    id: number
    name: string
    zoneCount: number
    camps: {
      id: number
      name: string
      zone: number
    }[]
  }[]
  resistances: string[]
  weaknesses: {
    element: string
    stars: number
  }[]
  rewards: {
    id: number
    items: {
      id: number
      name: string
      description: string
      rarity: number
      carryLimit: number
      value: number
    }
    condition: {
      type: string
      subtype: string
      rank: string
      quantity: number
      chance: number
    }
  }[]
}


export namespace Monster {
    import mapperAilmentHttpToAilment = Ailment.mapperAilmentHttpToAilment;

  export function mapperMonsterHttpToMonster(monsterHttp: MonsterHttp): Monster {
    const ailments: Ailment[] = []
    const resistances: any = []
    const weaknesses: any = []

    monsterHttp.ailments.forEach(ailment => ailments.push(mapperAilmentHttpToAilment(ailment)))
    monsterHttp.resistances.forEach(resistance => resistances.push(resistance.element))
    monsterHttp.weaknesses.forEach(newWeakness => weaknesses.push({element: newWeakness.element, stars: newWeakness.stars}))

    return {
      id: monsterHttp.id,
      name: monsterHttp.name,
      type: monsterHttp.type,
      species: monsterHttp.species,
      description: monsterHttp.description,
      elements: monsterHttp.elements,
      ailments: ailments,
      locations: monsterHttp.locations,
      resistances: resistances,
      weaknesses: weaknesses,
      rewards: monsterHttp.rewards
    }
  }
}
