type SearchProps = {
  search: string;
};

function useSearchCharacter({ search }: SearchProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {};

  return {
    search,
    handleSearch
  };
}
