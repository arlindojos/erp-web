
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

  export type User = {
    email: string
    name: string
    lastName: string
  }

  export type Role = {
    role: string
  }
}