interface Response {
  isLoggedIn: boolean;
}

const useAuth = (): Response => {
  return {
    isLoggedIn: true,
  };
};

export default useAuth;
