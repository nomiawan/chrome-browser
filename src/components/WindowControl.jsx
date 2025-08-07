import { Minus, Square, X } from "lucide-react"

const WindowControl = ({ handleMinimize, handleMaximize, handleClose }) => {
    return (
        <div className="window-controls">
            <button className="window-control minimize" onClick={handleMinimize}>
                <Minus size={12} />
            </button>
            <button className="window-control maximize" onClick={handleMaximize}>
                <Square size={10} />
            </button>
            <button className="window-control close" onClick={handleClose}>
                <X size={12} />
            </button>
        </div>
    )
}

export default WindowControl