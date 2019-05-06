import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { detail } from '../models/detail.model';

@Injectable()
export class RegisterService {

	constructor(private http: HttpClient){

	}
	
	validateLogin(user: detail){
		return this.http.post('/api/user/login',{
			username : user.username,
			password : user.password
		})
	}
	register(user: detail){
		return this.http.post('/api/register',{
			username : user.username,
			password : user.password,
			name:user.name,
		})
	}

}
