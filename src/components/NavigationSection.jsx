import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react'

const NavigationSection = () => {
    return (
        <div className="nav-controls">
            <button className="nav-button">
                <ChevronLeft size={16} />
            </button>
            <button className="nav-button">
                <ChevronRight size={16} />
            </button>
            <button className="nav-button">
                <RotateCcw size={14} />
            </button>
        </div>
    )
}

export default NavigationSection