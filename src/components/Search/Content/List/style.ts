import styled from 'styled-components';
import { motion } from 'framer-motion';

const SearchList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  row-gap: 1rem;

  margin-top: 2rem;
`;

export { SearchList };
