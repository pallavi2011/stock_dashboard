import { render, screen } from '@testing-library/react'
import Dashboard from '../components/Dashboard';
import ThemeContext from '../components/context/ThemeContext'
import StockContext from '../components/context/StockContext'

function renderDashboard(darkmodeval, stocksymbol){
        return render(
    <ThemeContext.Provider value={darkmodeval}>
        <StockContext.Provider value={stocksymbol}>
                <Dashboard/>
        </StockContext.Provider>
        
    </ThemeContext.Provider>
        )
}

test('should render Dashboard', () => {
    renderDashboard(false,"AAPL")
    
})

