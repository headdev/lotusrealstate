// useNavigation.tsx

import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goToDetail = (id: string) => {
    navigate(`/property-detail/${id}`);
  }

  return {
    goToDetail
  }; 
};