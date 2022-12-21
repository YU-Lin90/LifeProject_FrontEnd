import { FunctionProvider } from './FunctionProvider';
import { AuthProvider } from './AuthProvider';
import { LaguageProvider } from './LaguageProvider';
import { GeoProvider } from './GeoProvider';
export default function ContextProviders({ children }) {
  //需要其他context時這裡再夾進去
  return (
    <LaguageProvider>
      <FunctionProvider>
        <GeoProvider>
          <AuthProvider>{children}</AuthProvider>
        </GeoProvider>
      </FunctionProvider>
    </LaguageProvider>
  );
}
