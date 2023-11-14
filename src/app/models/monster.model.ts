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
  weakness: {
    element: string
    stars: number
    condition: string
  }[]
  reward: {
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
  resistances: {
    element: string
    condition: string
  }[]
  weakness: {
    element: string
    stars: number
    condition: string
  }[]
  reward: {
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

    monsterHttp.ailments.forEach(ailment => ailments.push(mapperAilmentHttpToAilment(ailment)))

    return {
      id: monsterHttp.id,
      name: monsterHttp.name,
      type: monsterHttp.type,
      species: monsterHttp.species,
      description: monsterHttp.description,
      elements: monsterHttp.elements,
      ailments: ailments,
      locations: monsterHttp.locations,
      resistances: monsterHttp.resistances,
      weakness: monsterHttp.weakness,
      reward: monsterHttp.reward
    }
  }
}
