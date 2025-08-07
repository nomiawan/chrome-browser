import { X } from "lucide-react"

const TabSection = ({ tabs, activeTab, setActiveTab, handleCloseTab, handleNewTab }) => {
    return (
        <div className="tabs-container">
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                >
                    <div className="tab-content">
                        <div className="tab-favicon">
                            <div className="favicon-placeholder"></div>
                        </div>
                        <span className="tab-title">{tab.title}</span>
                        <button
                            className="tab-close"
                            onClick={(e) => handleCloseTab(tab.id, e)}
                        >
                            <X size={12} />
                        </button>
                    </div>
                </div>
            ))}
            <button className="new-tab-button" onClick={handleNewTab}>+</button>
        </div>
    )
}

export default TabSection