import './AddNew.css';

export default function AddNew(props) {
    function clickHandle(){
        props.clickHandle();
    }
    return (
    <>
    <button className='button' onClick={clickHandle}>Add New</button>
    </>
    )
}