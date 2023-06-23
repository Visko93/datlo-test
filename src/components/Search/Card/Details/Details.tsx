import { StyledDetails } from './style';
import type { DetailsProps } from './type';

export function Details({ text, icon }: DetailsProps) {
  return (
    <StyledDetails>
      {icon ? icon : null}
      <p>{text}</p>
    </StyledDetails>
  );
}
