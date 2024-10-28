import './index.css'

const TabItem = props => {
  const {tabDetails, upDateStateId} = props
  const {displayText,tabId} = tabDetails
  const onChangeTab = () => {
    upDateStateId(tabId)
  }
  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
