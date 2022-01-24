const useTechnologiesColumns = () => {
  const columns = [
    { key: 'id', name: 'Id' },
    { key: 'name', name: 'Name' },
    { key: 'count', name: 'Count' },
    { key: 'updated', name: 'Updated' },
    { key: 'created', name: 'Created' },
  ];

  return { columns };
};

export default useTechnologiesColumns;
