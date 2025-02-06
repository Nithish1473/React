import React from 'react'

const FBCpropEx = (props) => {
    console.log(props);
    if(props.isMarried == true){
        return (
             <div>
                <h1>{props.username} is a married person</h1>
                {
                    props.hobbies.map(hobby=>{
                        return <li>{hobby}</li>
                    })
                }

    </div>
    
  )
}

}


export default FBCpropEx