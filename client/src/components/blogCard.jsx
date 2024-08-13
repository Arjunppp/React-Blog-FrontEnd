


export const BlogCard = ({title , content}) => 
{
    return(
        <div className="blogCard">
            <h1>{title}</h1>
            <p>
                {content}
            </p>
        </div>
    )

}