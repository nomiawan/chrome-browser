const ContentArea = ({ tabs, activeTab }) => {
    return (
        <div className="content-area">
            <div className="content-placeholder">
                <h2>Tab Content: {tabs.find(tab => tab.id === activeTab)?.title}</h2>
                <p>App goes here</p>
                <p className="tab-info">Tab ID: {activeTab} | Total Tabs: {tabs.length}</p>
            </div>
        </div>
    )
}

export default ContentArea