export class Access{

  public login:string;
  public pass:string;
  public error:string;
  public token:string;
  public status:boolean


  constructor(data:any){
    this.login = data.login;
    this.pass = data.pass;
    this.error = data.error;
    this.token = data.token;
    this.token = data.status;
  }
}
