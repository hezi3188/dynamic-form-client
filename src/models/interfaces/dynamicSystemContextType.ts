import { SystemMode } from '../enums/systemMode';

export interface DynamicSystemContextType {
  systemMode: SystemMode;
  setSystemMode: (mode: SystemMode) => void;
}
