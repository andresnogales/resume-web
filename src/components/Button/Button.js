import "./style.css";
const Button = (props) => {
  return (
    <a href={props.link} className="btn">
      {props.label}
    </a>
  );
};

export default Button;
