export interface MonsterHttp{
  id: number
  name: string
  type: string
  species: string
  description: string
  elements: string[]
  ailments: {
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
            }
          }[]
        }[]
      }
    }
  }
}

export namespace Monster{
}
