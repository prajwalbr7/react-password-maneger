import './PasswordList.css'

const PasswordList = props => {
  const {details, DeleteListItems, isPasswordTrue} = props
  const {url, name, password, id, newClassColor, firstUrlLetter} = details
  const deleteList = () => {
    DeleteListItems(id)
  }
  console.log(isPasswordTrue)
  const PassShow = isPasswordTrue ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="password-size-width"
    />
  ) : (
    <p className="list-para-style">{password}</p>
  )
  return (
    <li className="list-style">
      <div className="container-heading-single-para">
        <h1 className={`list-heading-single-alpha-style ${newClassColor}`}>
          {firstUrlLetter}
        </h1>

        <div className="list-para-container">
          <p className="list-para-style">{url}</p>

          <p className="list-para-style">{name}</p>

          {PassShow}
        </div>
      </div>
      <div className="">
        <button
          className="button-style-to-img"
          type="button"
          onClick={deleteList}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="button-style-img"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordList
