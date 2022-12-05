import { updateStart, updateSuccess, updateError } from "./userRedux";

export const updateUser = async (user, dispatch) =>
{
    dispatch(updateStart());
    try
    {
        //const res = await axios.post("http://localhost:5000/api/users", user)
        dispatch(updateSuccess(user))
    } catch (err)
    {
        dispatch(updateError())
    }
}