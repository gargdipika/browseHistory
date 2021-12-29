import './index.css'

const HistoryItem = props => {
  const {historyDetail, onClickButton} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetail

  const deleteItem = () => {
    onClickButton(id)
  }

  return (
    <li className="list-container">
      <div className="container">
        <p>{timeAccessed}</p>
        <img className="image-style" src={logoUrl} alt="domain logo" />
        <p className="title-style">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" testid="delete">
        <img
          alt="delete"
          className="delete-icon-style"
          onClick={deleteItem}
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
