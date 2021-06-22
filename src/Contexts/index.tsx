import React, { createContext } from 'react';
import { User } from 'ogolfim';
import useLocalStorage from '../hooks/useLocalStorage';

type Data = {
  user?: User
}

interface Props {
  data: Data | null

  setData: React.Dispatch<React.SetStateAction<Data | null>>;
}

export const DataContext =  createContext<Props>({} as Props);

const DataProvider: React.FC = ({children}) => { 
  
  const [ data, setData ] = useLocalStorage<Data | null>('ogolfim');

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  ) 
}

export default DataProvider;