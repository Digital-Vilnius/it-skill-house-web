const useContractorsColumns = () => {
  const columns = [
    { key: 'id', name: 'Id' },
    { key: 'name', name: 'Name' },
    { key: 'updated', name: 'Updated' },
    { key: 'created', name: 'Created' },
  ];

  return { columns };
};

export default useContractorsColumns;
