export interface IPerson{
    name: string,
    age: number,
    role: string
}
export interface ICourse{
    personList: IPerson[],
    courseName: string,
    hoursPerWeek: number
}
export interface IMajor{
    name: string,
    courseList: ICourse[]
}
export interface IDepartment{
    type: string,
    majorList: IMajor[]
}
export interface IUniversity{
    name: string,
    location: string,
    departmentList: IDepartment[]
}
