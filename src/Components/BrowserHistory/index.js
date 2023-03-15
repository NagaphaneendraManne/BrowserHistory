import './index.css'

const BrowserHistory = props => {
  const {historyDetails} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails
  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-container">
      <p className="timezone">{timeAccessed}</p>
      <img src={logoUrl} alt="app logo" className="logo" />
      <h1 className="website-name">{title}</h1>
      <p className="domain-name">{domainUrl}</p>
      <button className="button" type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-button"
        />
      </button>
    </li>
  )
}
export default BrowserHistory
