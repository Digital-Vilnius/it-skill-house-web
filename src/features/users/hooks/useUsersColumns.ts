const useUsersColumns = () => {
  const columns = [
    { key: 'email', name: 'Email' },
    { key: 'firstName', name: 'First name' },
    { key: 'lastName', name: 'Last name' },
    { key: 'updated', name: 'Updated' },
    { key: 'created', name: 'Created' },
  ];

  return { columns };
};

export default useUsersColumns;
