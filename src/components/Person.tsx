interface Props {
    name : string;
    age : number;
    isMarried : boolean;
    friends : string[];
    country : string;
}

export enum Country {
    Pakistan = "Pakistan" ,
    India = "India" ,
    Frnace = "France",
}

export const Person = (props: Props) => {
   
     
   return(
       <div>
        <h1>I am {props.name}</h1>
        
        <h1>Age : {props.age}</h1>
        
        <h1> {props.isMarried ? "is Married" : " Not Married "}</h1>
        
        <h1> Friend List is :</h1>
        {props.friends.map((nam)=> {
            return <h1>{nam}</h1>
        })}
        <h1>country : {props.country}</h1>

       </div>

   ) 

}