import '../../css/main.scss';
import './button.scss';
export default function Button({name}) {

    return (
        <a className='button'>{name}</a>
    )
}