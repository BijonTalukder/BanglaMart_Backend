export type IUser = {
    id: number;
    userName:string;
    email:string;
    password:string;
    phoneNumber:string;
    address:string;
    role:string;
    isSeller:string;
    switchingType:string;
    selleingProductType:string;
    companyName:string;
    companyAddress:string;
    status:string;
    

  };
  export interface IUserMethods{
    isUserExist(id:string):Promise<Partial<IUser>| null>
    isPasswordMatched(givenPassword:string,savedPassword:string):Promise<boolean>
  
  }