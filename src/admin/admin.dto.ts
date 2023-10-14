import { IsEmail, IsNotEmpty } from 'class-validator'


export class AdminInfo{

@IsNotEmpty({message: 'Please enter a valid name'}) 
name:string;
@IsEmail() @IsNotEmpty() 
username:string;
password:string;
address:string;
filename:string;
}


export class AdminUpdateInfo{
    name:string;
    username:string;
    password:string;
    address:string;
    age:number;
    }