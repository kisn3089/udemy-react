import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
            <h2>Hi</h2>
        </div>
    )
}

export default Card;