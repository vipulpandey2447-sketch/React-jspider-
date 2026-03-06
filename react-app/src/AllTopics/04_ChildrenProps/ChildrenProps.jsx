const ChildrenProps=()=>{
    let user = ["Jane doe","John doe","James doe"];
    return(
        <div>
            <h1>Learn Children Props</h1>
            {user.map((name,idx)=>{
                return <Card key={idx}> {name}</Card>
            })}
        </div>
    )
};

export default ChildrenProps;


const Card =(props)=>{
    return(
        <div>
            <h1>I am Card</h1>

        </div>
    )
};