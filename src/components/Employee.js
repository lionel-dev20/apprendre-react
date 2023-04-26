function Employee (props) {

    return ( 
    <>
    <h2>Here is employee {props.name} </h2>
    {props.role ? (<p>{props.role}</p>) : (<p>No role</p>)}
    </>

    ) 

}
export default Employee;