import { render, screen, waitFor } from '@testing-library/react'
import Chart from '../components/Chart'; 
import ThemeContext from '../components/context/ThemeContext'
import StockContext from '../components/context/StockContext'
import { mockHistoricalData } from '../constants/mock';
import userEvent from '@testing-library/user-event';

jest.mock('recharts', () => {
    const OriginalModule = jest.requireActual('recharts')
    return {
        ...OriginalModule,
        ResponsiveContainer: ({ children }) => (
            <OriginalModule.ResponsiveContainer width={800} height={800}>
                {children}
            </OriginalModule.ResponsiveContainer>
        ),
    }
})

test('should render Chart with props data', async () => {
   
    render(
        <ThemeContext.Provider value={true}>
        <StockContext.Provider value={"MSFT"}>
            <Chart data={mockHistoricalData}/>
        </StockContext.Provider>
    
    </ThemeContext.Provider>
    );

   userEvent.hover(document.getElementById('area'));

   expect(screen.getByText(/value/i)).toBeInTheDocument();
  
})

test('should render Chart with props data as null', async () => {
   
    render(
        <ThemeContext.Provider value={true}>
        <StockContext.Provider value={"MSFT"}>
            <Chart data={null}/>
        </StockContext.Provider>
    
    </ThemeContext.Provider>
    );
    });