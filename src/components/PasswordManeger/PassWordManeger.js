import './PassWordManeger.css'
import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import PasswordList from '../PasswordManegerList/PasswordList'

const initialColors = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class PasswordManeger extends Component {
  state = {
    isPasswordTrue: true,
    Url: '',
    Name: '',
    Password: '',
    arraylist: [],
    count: 0,
    searchInput: '',
  }

  onChangeInputUrl = event => {
    this.setState({Url: event.target.value})
  }

  onChangeInputName = event => {
    this.setState({Name: event.target.value})
  }

  onChangeInputPassword = event => {
    this.setState({Password: event.target.value})
  }

  onAddContent = event => {
    event.preventDefault()

    const {Url, Name, Password} = this.state
    const FirstUrlLetter = Url.slice(0, 1)
    const ColorIndex = initialColors[Math.floor(Math.random() * 7)]
    const AddListItem = {
      id: uuid4(),
      firstUrlLetter: FirstUrlLetter,
      url: Url,
      name: Name,
      password: Password,
      newClassColor: ColorIndex,
    }
    this.setState(prevState => ({
      arraylist: [...prevState.arraylist, AddListItem],
      Url: '',
      Name: '',
      Password: '',
      count: prevState.count + 1,
    }))
  }

  DeleteListItems = id => {
    const {arraylist} = this.state
    const FilterItems = arraylist.filter(eachItem => eachItem.id !== id)
    this.setState(prevState => ({
      arraylist: FilterItems,
      count: prevState.count - 1,
    }))
  }

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  ShowPassword = () => {
    this.setState(prevState => ({isPasswordTrue: !prevState.isPasswordTrue}))
  }

  render() {
    const {
      isPasswordTrue,
      Url,
      Name,
      Password,
      count,
      searchInput,
      arraylist,
    } = this.state

    const filterSearchResults = arraylist.filter(list =>
      list.url.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="container1">
        <div className="container2">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              alt="app logo"
              className="img-password-maneger"
            />
          </div>
          <div className="container3">
            <div className="passwordContainer">
              <h1 className="heading-style-add-password">Add New Password</h1>

              <form className="form-container" onSubmit={this.onAddContent}>
                <div className="website-input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="website-img"
                  />
                  <input
                    type="text"
                    placeholder="Enter Website"
                    className="input-style"
                    onChange={this.onChangeInputUrl}
                    value={Url}
                  />
                </div>

                <div className="website-input-container margin-to-input">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="website-img"
                  />
                  <input
                    type="text"
                    placeholder="Enter Username"
                    className="input-style"
                    onChange={this.onChangeInputName}
                    value={Name}
                  />
                </div>

                <div className="website-input-container margin-to-input">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                    className="website-img"
                  />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="input-style"
                    onChange={this.onChangeInputPassword}
                    value={Password}
                  />
                </div>

                <button type="submit" className="button-style">
                  Add
                </button>
              </form>
            </div>
            <div className="container-large-img-user-login">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="img-user-login"
              />
            </div>
          </div>

          <div className="container4">
            <div className="row-container-to-count">
              <div className="count-heading-container">
                <h1 className="your-password-paragraph-style">
                  Your Passwords
                </h1>
                <p className="span-style">{count}</p>
              </div>
              <div className="container-img-search-input">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="img-search-style"
                />
                <input
                  type="Search"
                  placeholder="Search"
                  className="input-style-search"
                  value={searchInput}
                  onChange={this.onSearchInput}
                />
              </div>
            </div>
            <hr />
            <div className="input-label-container">
              <input
                id="checkbox"
                type="checkbox"
                onChange={this.ShowPassword}
              />
              <label htmlFor="checkbox" className="label-style">
                Show Passwords
              </label>
            </div>

            {filterSearchResults.length > 0 ? (
              <ul className="ul-style">
                {filterSearchResults.map(eachItem => (
                  <PasswordList
                    details={eachItem}
                    isPasswordTrue={isPasswordTrue}
                    DeleteListItems={this.DeleteListItems}
                    key={eachItem.id}
                  />
                ))}
              </ul>
            ) : (
              <div className="no-password-img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="nopassword-img"
                />
                <p className="para-no-password-style">No Passwords</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManeger
