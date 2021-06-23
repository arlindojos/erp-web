
declare module 'ogolfim' {

  export type Districts = {
    id: number
    name: string
  }[]

  export interface Province {
    id: number
    name: string
    districts: Districts
  }

  export type User = any

  export type Role = {
    role: string
  }
}