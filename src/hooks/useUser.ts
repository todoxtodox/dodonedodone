import { getUser } from '@/repository/request';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
  return useQuery(['USER_ME'], getUser);
};

export default useUser;
