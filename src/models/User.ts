export class User{

  public Nom:string;
  public Prenom:string;
  public Nom_ville:string;
  public code_postal:string;
  public Titre:string;
  public idUsers:number;
  public Rue_num1:string;
  public Pays:string;

  constructor(data:any){
    this.Nom = data.Nom;
    this.Prenom = data.Prenom;
    this.Nom_ville = data.Nom_ville;
    this.code_postal = data.code_postal;
    this.Titre = data.Titre;
    this.idUsers = data.idUsers;
    this.Rue_num1 = data.Rue_num1;
    this.Pays = data.Pays;
  }
}
