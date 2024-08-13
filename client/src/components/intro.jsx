

export const Intro =({setViewing , setCreate}) => 
{
    return (
        <div className="introSection">
        <h1>Welcome to Blogs</h1>
          <div className="buttons">
          <button onClick={() => {setViewing(true); setCreate(false)}}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            View All blogs
        </button>
        <button onClick={() => {setCreate(true); setViewing(false) }}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Create A Blog
        </button>
          </div>
    </div>
    )
}