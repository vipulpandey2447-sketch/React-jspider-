const PropsChild=(props)=>{
     console.log(props);// {data1:hiii}
    return(
        <div>
            <h1>PropsChild {props.data1}</h1>
       
        </div>
    )
}

export default PropsChild;