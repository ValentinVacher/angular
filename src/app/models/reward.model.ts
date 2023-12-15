export interface RewardHttp{
  id: number
  item: {
    id: number
    name: string
    description: string
    rarity: number
    carryLimit: number
    value: number
  }
  conditions: {
    type: string
    subtype: string
    rank: string
    quantity: number
    chance: number
  }[]
}

export interface Reward{
  item: {
    name: string
    description: string
  }
  conditions: {
    type: string
    subtype: string
    rank: string
    quantity: number
    chance: number
  }[]
}

export namespace Reward{
  export function mapperRewardHttpToReward(rewardHttp: RewardHttp): Reward {
    return {
      item: {
        name: rewardHttp.item.name,
        description: rewardHttp.item.description
      },
      conditions: rewardHttp.conditions
    }
  }
}
