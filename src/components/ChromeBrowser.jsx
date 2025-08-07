import { useState } from "react"
import { MoreVertical } from 'lucide-react'
import WindowControl from "./WindowControl"
import TabSection from "./TabSection"
import NavigationSection from "./NavigationSection"
import AddressBar from "./AddressBar"
import ContentArea from "./ContentArea"

const ChromeBrowser = () => {

    const [activeTab, setActiveTab] = useState(0)
    const [isMaximized, setIsMaximized] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    const [tabs, setTabs] = useState([
        { id: 0, title: 'New Tab', url: 'https://example.com' },
        { id: 1, title: 'Google', url: 'https://google.com' },
    ])
    const [nextTabId, setNextTabId] = useState(2)

    const handleMinimize = () => {
        setIsMinimized(true)
        setTimeout(() => setIsMinimized(false), 2000) // Auto-restore after 2 seconds for demo
    }

    const handleMaximize = () => {
        setIsMaximized(!isMaximized)
    }

    const handleClose = () => {
        setIsClosed(true)
    }

    const handleNewTab = () => {
        const newTab = {
            id: nextTabId,
            title: 'New Tab',
            url: 'https://example.com'
        }
        setTabs([...tabs, newTab])
        setActiveTab(nextTabId)
        setNextTabId(nextTabId + 1)
    }

    const handleCloseTab = (tabId, e) => {
        e.stopPropagation() // Prevent tab selection when closing

        if (tabs.length === 1) {
            // If it's the last tab, close the entire window
            setIsClosed(true)
            return
        }

        const newTabs = tabs.filter(tab => tab.id !== tabId)
        setTabs(newTabs)

        // If we closed the active tab, switch to another tab
        if (activeTab === tabId) {
            const tabIndex = tabs.findIndex(tab => tab.id === tabId)
            const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : 0
            setActiveTab(newTabs[newActiveIndex].id)
        }
    }

    const handleRestore = () => {
        setIsMinimized(false)
        setIsClosed(false)
    }

    if (isClosed) {
        return (
            <div className="browser-closed">
                <div className="closed-message">
                    <h2>Browser window closed</h2>
                    <button onClick={handleRestore} className="restore-button">
                        Reopen Browser
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className={`browser-window ${isMaximized ? 'maximized' : ''} ${isMinimized ? 'minimized' : ''}`}>
            {/* Window Controls */}
            <WindowControl
                handleMinimize={handleMinimize}
                handleMaximize={handleMaximize}
                handleClose={handleClose}
            />

            {/* Chrome Top Bar */}
            <div className="chrome-topbar">
                {/* Tab Section */}
                <TabSection
                    tabs={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    handleCloseTab={handleCloseTab}
                    handleNewTab={handleNewTab}
                />

                {/* Navigation and Address Bar Section */}
                <div className="navigation-section">
                    {/* Navigation Icons */}
                    <NavigationSection />

                    {/* Address Bar */}
                    <AddressBar
                        tabs={tabs}
                        activeTab={activeTab}
                    />

                    {/* Menu Button */}
                    <button className="menu-button">
                        <MoreVertical size={16} />
                    </button>
                </div>
            </div>

            {/* Content Area */}
            <ContentArea
                tabs={tabs}
                activeTab={activeTab}
            />

            {/* Minimized State Indicator */}
            {isMinimized && (
                <div className="minimize-indicator">
                    <span>Browser minimized - will restore automatically</span>
                </div>
            )}
        </div>
    )
}

export default ChromeBrowser