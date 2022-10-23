import React from 'react';

const useCategories = () => {
  const [categories, setCategories] = React.useState({ data: [] });

  React.useEffect(() => {
    fetch('http://localhost:1337/api/categories?populate=*')
      .then((res) => res.json())
      .then((res) => setCategories(res));
  }, []);

  return {
    categories,
  };
};

const useMovies = () => {
  const [data, setData] = React.useState({ data: [] });
  const [selected, setSelected] = React.useState('');
  const [keyword, setKeyword] = React.useState('');

  let handleSearch = (keyword) => setKeyword(keyword);

  let handleFilter = (categorieName) => {
    setSelected(categorieName);
  };

  React.useEffect(() => {
    if (selected !== '') {
      fetch(
        `http://localhost:1337/api/movies?filters[categories][name][$eq]=${selected}&populate=*`
      )
        .then((res) => res.json())
        .then((res) => setData(res));
    } else {
      fetch(`http://localhost:1337/api/movies?populate=*`)
        .then((res) => res.json())
        .then((res) => setData(res));
    }
  }, [selected]);

  return {
    data,
    selected,
    handleFilter,
    keyword,
    handleSearch,
    setKeyword
  };
};

export { useCategories, useMovies };
