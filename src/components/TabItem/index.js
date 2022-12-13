import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const onClickTabItem = () => {
    updateTabItem(tabId)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        onClick={onClickTabItem}
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
