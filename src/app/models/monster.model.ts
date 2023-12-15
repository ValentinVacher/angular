import {Ailment, AilmentHttp} from "./ailment.model";
import {Location, LocationHttp} from "./location.model";
import {Weakness, WeaknessHttp} from "./weakness.model";
import {Reward, RewardHttp} from "./reward.model";

export interface MonsterHttp {
  id: number
  name: string
  type: string
  species: string
  description: string
  elements: string[]
  ailments: AilmentHttp[]
  locations: LocationHttp[]
  resistances: {
    element: string
    condition: string
  }[]
  weaknesses: WeaknessHttp[]
  rewards: RewardHttp[]
}

export interface Monster {
  id: number
  name: string
  type: string
  species: string
  description: string
  elements: string[]
  ailments: Ailment[]
  locations: Location[]
  resistances: string[]
  weaknesses: Weakness[]
  rewards: Reward[]
}

export interface MonsterForm {
  name: string
  type: string
  species: string
  description: string
}

export namespace Monster {
  import mapperAilmentHttpToAilment = Ailment.mapperAilmentHttpToAilment;
  import mapperLocationHttpToLocation = Location.mapperLocationHttpToLocation;
  import mapperWeaknessHttpToWeakness = Weakness.mapperWeaknessHttpToWeakness;
  import mapperRewardHttpToReward = Reward.mapperRewardHttpToReward;

  export enum Type {
    SMALL = 'small',
    LARGE = 'large'
  }

  export enum Species {
    BIRD_WYVERN = 'bird wyvern',
    BRUTE_WYVERN = 'brute wyvern',
    ELDER_DRAGON = 'elder dragon',
    FANGED_BEAST = 'fanged beast',
    FANGED_WYVERN = 'fanged wyvern',
    FISH = 'fish',
    FLYING_WYVERN = 'flying wyvern',
    HERBIVORE = 'herbivore',
    LYNIAN = 'lynian',
    NEOPTERON = 'neopteron',
    PISCINE_WYVERN = 'piscine wyvern',
    RELICT = 'relict',
    WINGDRAKE = 'wingdrake',
  }

  export function mapperMonsterHttpToMonster(monsterHttp: MonsterHttp): Monster {
    const ailments: Ailment[] = []
    const locations: Location[] = []
    const resistances: string[] = []
    const weaknesses: Weakness[] = []
    const rewards: Reward[] = []

    monsterHttp.ailments.forEach(ailment => ailments.push(mapperAilmentHttpToAilment(ailment)))
    monsterHttp.locations.forEach(location => locations.push(mapperLocationHttpToLocation(location)))
    monsterHttp.resistances.forEach(resistance => resistances.push(resistance.element))
    monsterHttp.weaknesses.forEach(newWeakness => weaknesses.push(mapperWeaknessHttpToWeakness(newWeakness)))
    monsterHttp.rewards.forEach(reward => rewards.push(mapperRewardHttpToReward(reward)))

    return {
      id: monsterHttp.id,
      name: monsterHttp.name,
      type: monsterHttp.type,
      species: monsterHttp.species.substring(0),
      description: monsterHttp.description.substring(0),
      elements: monsterHttp.elements,
      ailments: ailments,
      locations: locations,
      resistances: resistances,
      weaknesses: weaknesses,
      rewards: rewards
    }
  }

  export function mapperMonterHttpAndMonsterForm(monsterHttp: MonsterHttp, monsterForm: MonsterForm): Monster{
    const monster = Monster.mapperMonsterHttpToMonster(monsterHttp)

    return {
      ...monster,
      ...monsterForm
    }
  }

  export function mapperRandomMonsterAndMonsterForm(monsterHttp: MonsterHttp[], monsterForm: MonsterForm){
    const monster = monsterHttp[Math.floor(Math.random() * (monsterHttp.length - 1))]
    const newMonster = Monster.mapperMonterHttpAndMonsterForm(monster, monsterForm)
    newMonster.id = monsterHttp[monsterHttp.length - 1].id + 1

    return newMonster
  }
}
