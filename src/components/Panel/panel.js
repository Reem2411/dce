// import MyPropTypes from "../../../utils/MyPropTypes";
import './panel.css';

const Panel = (props) => {
  const {type, children} = props;
    return <div className={`Default-panel ${type}`}>{children}</div>;
}

export default Panel;
