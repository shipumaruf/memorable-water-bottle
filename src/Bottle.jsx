import './Bottle.css'
const Bottle = ({bottle}) => {
    const {name,img}= bottle
    return (
        <div className='bottle'>
            <h2>Name:{name}</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;