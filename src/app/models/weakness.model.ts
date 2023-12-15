export interface WeaknessHttp{
  element: string
  stars: number
  condition: string
}

export interface Weakness {
  element: string
  stars: number
}

export namespace Weakness{
  export function mapperWeaknessHttpToWeakness(weaknessHttp: WeaknessHttp): Weakness{
    return {
      element: weaknessHttp.element,
      stars: weaknessHttp.stars
    }
  }
}
