import { StyledDetails } from './style';
import type { DetailsProps } from './type';

export function Details({ text, icon, ...rest }: DetailsProps) {
  return (
    <StyledDetails {...rest}>
      {icon ? icon : null}
      <p>{text}</p>
    </StyledDetails>
  );
}
