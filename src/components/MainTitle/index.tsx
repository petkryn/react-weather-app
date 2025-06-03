import "./style.css";

function MainTitle({titleText}: {titleText: string}) {
  return <h1 className="main__title">{titleText}</h1>;
}

export default MainTitle;