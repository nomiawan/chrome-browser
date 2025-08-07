import { Lock, Star } from "lucide-react"

const AddressBar = ({ tabs, activeTab }) => {
    return (
        <div className="address-bar">
            <div className="address-bar-content">
                <Lock size={14} className="lock-icon" />
                <input
                    type="text"
                    className="address-input"
                    placeholder={tabs.find(tab => tab.id === activeTab)?.url || 'https://example.com'}
                    defaultValue={tabs.find(tab => tab.id === activeTab)?.url || 'https://example.com'}
                    key={activeTab} // Force re-render when tab changes
                />
                <Star size={16} className="star-icon" />
            </div>
        </div>
    )
}

export default AddressBar