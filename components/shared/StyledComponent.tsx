// StyledTextComponent.tsx
import { ReactNode } from 'react';

interface StyledTextComponentProps {
  children: ReactNode;
  className?: string;
}

const StyledTextComponent = ({ children, className }: StyledTextComponentProps) => (
  <span className={className}>{children}</span>
);

export default StyledTextComponent;
