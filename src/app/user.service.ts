import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userData:Array<User> = [];
  constructor(private http:HttpClient) { }

  saveUser(user:User){
    // this.userData.push(user)
    return this.http.post(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users`,user)
  }

  getAllUser(){
    return this.http.get<Array<User>>(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users`)
  }

  getUserByID(id:number){
    return this.http.get<User>(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`)
  }

  updateUserById(userId:number,userdata:User){
    return this.http.put(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${userId}`,userdata)
  }

  deleteUserById(id:number){
    return this.http.delete(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`)
  }
}
