
const logout = () => localStorage.removeItem('user')

const authService = {
    logout,

}
export default authService