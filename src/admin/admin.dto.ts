import { IsEmail, IsNotEmpty } from 'class-validator'


export class AdminInfo{
id:number;
@IsNotEmpty({message: 'Please enter a valid name'}) 
name:string;
//@IsEmail() @IsNotEmpty() 
username:string;
password:string;
address:string;
age:number;
}


export class AdminUpdateInfo{
    name:string;
    username:string;
    password:string;
    address:string;
    age:number;
    }