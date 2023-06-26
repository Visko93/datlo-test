import styled from 'styled-components';
import { motion } from 'framer-motion';

const SearchList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  gap: 0.5rem;
  justify-items: center;

  margin-top: 1rem;
`;

export { SearchList };
