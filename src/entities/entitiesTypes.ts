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
export interface ILibrary{
    bookList: IBook[],
    university: string
}
export interface IBook{
    name: string,
    type: string,
    isRetired: boolean,
}