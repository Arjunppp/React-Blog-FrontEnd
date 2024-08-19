import { useEffect, useState } from "react";

export const Input = ({ setRender, setViewing, setCreate }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const [isNull , setNull] = useState(false);
  const submitChange = (e) => {
    e.preventDefault();
    if(title === '' || content === '')
    {
      setNull(true);
    }
    else{
      setSubmit(true);
    }
    
  };
  useEffect(() => {
    if (isSubmit === true) {
      const postUrl = "http://localhost:5000/";
      fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      })
        .then((response) => {
          setRender(true);
          setSubmit(false);
          setViewing(true);
          setCreate(false);
        })
        .catch((error) => console.error("Error:", error));
    };
    if(isNull === true)
    {
      setTimeout(() => {setNull(false)} , 1500)
    }

  }, [isSubmit , isNull]);


  return (
    <>
     {isNull && <h4 className="emptyAlert">Both title and content is requird</h4>}
      <form>
        <input
          type="text"
          placeholder="Type he title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          type="text"
          placeholder="Type the content"
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="createBlog" onClick={submitChange}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add
        </button>
      </form>
     
    </>
  );
};
