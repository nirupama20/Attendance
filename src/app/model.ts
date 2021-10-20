export interface User {
    id?:number,
    userName: string,
    userEmail: string,
    phoneNumber: string,
    country: string
}

export interface attendance {
    id?: number,
    date: string,
    present: Array<User>
  }
  
  export interface attendanceRec {
    name: string,
    value: number
  }