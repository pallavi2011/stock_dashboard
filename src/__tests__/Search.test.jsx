import { render, screen, waitFor } from '@testing-library/react'
import Search from '../components/Search';
import ThemeContext from '../components/context/ThemeContext'
import StockContext from '../components/context/StockContext'


function renderSearch(darkmodeval, stocksymbol){
    return render(
<ThemeContext.Provider value={darkmodeval}>
    <StockContext.Provider value={stocksymbol}>
            <Search />
    </StockContext.Provider>
    
</ThemeContext.Provider>
    )
}

test('should render search', () => {
    renderSearch(false,"AAPL")
    const element = screen.getByPlaceholderText(/search/i);

    expect(element).toBeInTheDocument();


})

test('should render screen in darkmode', () => {
    renderSearch(true,"AAPL")
})

test('should throw error when null value is passed for darkmode', () => {
    expect(() => {
      render(
        <ThemeContext.Provider value={null}>
    <StockContext.Provider value={"AAPL"}>
            <Search />
    </StockContext.Provider>
    
</ThemeContext.Provider>
      );
    }).toThrowError("Cannot pass null as boolean value");
  });