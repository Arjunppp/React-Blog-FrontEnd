import { useState } from "react";



export const BlogCard = ({title , content}) => 
{
    const [isShowMore , setShowMore] =useState(false);


    const shorter = content.slice(0,100);
    
    
    const toggleState = () => 
    {
        if(isShowMore == true)
        {
            setShowMore(false);
        }
        else{

            setShowMore(true);
        }


    }

    return(
        <div className="blogCard">
            <h1>{title}</h1>
            <p className="Blog_Content">
               {isShowMore ? shorter : content}
            </p>
      {(content.length > 100) &&   <button onClick={toggleState}>{isShowMore? 'showless' : 'showMore'}</button>}
        
        </div>
    )

}