const Block = (props) => (
  <div className="block" id={props.id}>
    <hr /><h3 className="title">{props.title}</h3><hr />
    <div>{props.children}</div>
  </div>
);

export default Block;
