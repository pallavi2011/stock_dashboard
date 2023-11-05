import { render, screen } from '@testing-library/react'
import Overview from '../components/Overview';
import ThemeContext from '../components/context/ThemeContext'
import StockContext from '../components/context/StockContext'
import { mockOverviewData } from '../constants/mock';

const {symbol, price, change, currency, changePercent} = mockOverviewData;

test('should render Overview with negative change percent', async () => {
    render(
    <ThemeContext.Provider value={true}>
        <StockContext.Provider value={"MSFT"}>
            <Overview symbol={"MSFT"} price={"98.09"} change={"9.67"} currency={"USD"} changePercent={"-0.98"}/>
        </StockContext.Provider>
    
    </ThemeContext.Provider>
    )
    expect(screen.getByText(/MSFT/)).toBeInTheDocument();


})

test('should render Overview with positive change percent', async () => {
    render(
    <ThemeContext.Provider value={true}>
        <StockContext.Provider value={"TSLA"}>
            <Overview symbol={"TSLA"} price={"100.09"} change={"2.67"} currency={"USD"} changePercent={"+1.98"}/>
        </StockContext.Provider>
    
    </ThemeContext.Provider>
    )
    expect(screen.getByText(/MSFT/)).toBeInTheDocument();


})