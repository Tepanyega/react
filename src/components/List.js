

function List(props){
    

     function viewHandler(props){
       
        return(
           console.log('clicked')
        )

     }


    return(
       
        <div className="card">
            <h2>{props.text}</h2>

            <p> {props.purpose}</p>

            <div className="actions">
                
                    
                <button className="btn" onClick={viewHandler} >view Code</button>
                    
                

             
            </div>
            
        </div>

    );

}

export default List;