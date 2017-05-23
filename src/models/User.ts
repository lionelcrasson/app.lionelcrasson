export class User{

  public nom:string;
  public prenom:string;
  public ville:string;
  public cp:string;
  public titre:string;
  public id:number;
  public rue_l1:string;
  public pays:string;

  constructor(data:any){
    this.nom = data.Nom;
    this.prenom = data.Prenom;
    this.ville = data.Nom_ville;
    this.cp = data.code_postal;
    this.titre = data.Titre;
    this.id = data.idUsers;
    this.rue_l1 = data.Rue_num1;
    this.pays = data.Pays;
  }
}
