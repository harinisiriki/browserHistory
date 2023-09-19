import './index.css'

const HistoryItem = props => {
  const {historyList, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="app-logo" />
      <p className="title">{title}</p>
      <p className="link">{domainUrl}</p>
      <button
        className="button"
        type="button"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
