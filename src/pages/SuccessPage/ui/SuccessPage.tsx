import { Link } from "react-router-dom"

function SuccessPage() {
    return (
        <>
            Вы успешено зарегистрировались
            <Link to="/user">В личный кабинет</Link>
            <Link to="/">На главную</Link>
        </>

    )
}
export default SuccessPage