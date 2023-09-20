import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { logout, reset } from "../../features/authSlice";
const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(logout())

    }, []);
    return (
        <div>
        </div>
    )
};
export default Logout;