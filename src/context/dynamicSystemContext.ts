import { createContext } from 'react';
import { SystemMode } from '../models/enums/systemMode';
import { DynamicSystemContextType } from '../models/interfaces/dynamicSystemContextType';

export const DynamicSystemContext = createContext<DynamicSystemContextType>({
  setSystemMode: () => {},
  systemMode: SystemMode.LIST,
});
