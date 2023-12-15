export interface AilmentHttp {
  id: number
  name: string
  description: string
  recovery: {
    actions: string[]
    items: {
      id: number
      name: string
      description: string
      rarity: number
      carryLimit: number
      value: number
    }[]
  }
  protection: {
    items: {
      id: number
      name: string
      description: string
      rarity: number
      carryLimit: number
      value: number
    }[]
    skills: {
      id: number
      slug: string
      name: string
      description: string
      ranks: {
        id: number
        slug: string
        level: number
        description: string
        skill: number
        skillName: string
        modifiers: {
          affinity: string
          attack: number
          damageFire: number
          damageWater: number
          damageIce: number
          damageThunder: number
          damageDragon: number
          defense: number
          health: number
          sharpnessBonus: number
          resistAll: number
          resistFire: number
          resistWater: number
          resistIce: number
          resistThunder: number
          resistDragon: number
        }
      }[]
    }[]
  }
}

export interface Ailment {
  name: string
  description: string
}

export namespace Ailment{
  export function mapperAilmentHttpToAilment(ailmentHttp: AilmentHttp): Ailment{
    return {
      name: ailmentHttp.name,
      description: ailmentHttp.description
    }
  }
}
