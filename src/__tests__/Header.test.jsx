import { render, screen } from '@testing-library/react'
import Header from '../components/Header';
import ThemeContext from '../components/context/ThemeContext'
import StockContext from '../components/context/StockContext'

function renderHeader(darkmodeval, stocksymbol){
    return render(
<ThemeContext.Provider value={darkmodeval}>
    <StockContext.Provider value={stocksymbol}>
            <Header/>
    </StockContext.Provider>
    
</ThemeContext.Provider>
    )
}

test('should render  header', () => {
renderHeader(false,"AAPL")


})