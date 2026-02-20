import { useNavigate } from "react-router-dom";



export interface IUser {
  id: string;
  fullName: string;
  userName: string;
  password: string;

  logIn?: () => boolean;
  signUp?: () => boolean;
  uploadDog?: () => void;
  logOut?: () => void;
}

export const INITIAL_USER : IUser = {
    id : '1',
    fullName: '',
    userName:  '',
    password: ''
}

export class User implements IUser {
  // private fields
  private _id: string;
  private _fullName: string;
  private _userName: string;
  private _password: string;

  constructor(id: string, fullName: string, userName: string, password: string) {
    this._id = id;
    this._fullName = fullName;
    this._userName = userName;
    this._password = password;
  }

  // ---- GETTERS ----
  get id(): string {
    return this._id;
  }

  get fullName(): string {
    return this._fullName;
  }

  get userName(): string {
    return this._userName;
  }

  get password(): string {
    return this._password;
  }

  // ---- SETTERS ----
  set id(value: string) {
    this._id = value;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  set userName(value: string) {
    this._userName = value;
  }

  set password(value: string) {
    this._password = value;
  }

  // ---- METHODS (empty bodies as requested) ----
logIn(): boolean {
  // 1. Get users array from localStorage
  const usersJson = localStorage.getItem("users");

  let users: User[] = [];
  if (usersJson) {
    try {
      users = JSON.parse(usersJson);
    } catch {
      return false;
    }
  }

  console.log(users.length)
users.forEach(user => {
    console.log(`nick name and paswworkf is ${user.userName} and ${user.password}`);
})

  // 2. Find a matching user
  const found = users.find(
    (u) => u._userName === this._userName && u._password === this._password
  );



  // 3. Return true if found else false
 if(found){
  sessionStorage.setItem('user',this._userName);
  return true
 }

 return false;
}

 signUp(): boolean {
  // 1. get users array from localStorage
  const usersJson = localStorage.getItem("users");

  let users: User[] = [];
  if (usersJson) {
    try {
      users = JSON.parse(usersJson) as User[];
    } catch {
      users = [];
    }
  }

  // 2. check if username already exists
  const exists = users.some(u => u._userName === this._userName);
  if (exists) {
    alert("Username already taken.");
    return false;
  }


  // 4. add to array
  users.push(this);

  // 5. save updated array back to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // 6. success
  return true;
}

  uploadDog(): void {
    // no implementation
  }

  logOut(): void {
  sessionStorage.clear();
  }
}