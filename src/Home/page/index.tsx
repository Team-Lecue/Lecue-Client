import React from 'react';

import LecueBookList from '../components/LecueBookList';
import NavigateLecueBook from '../components/NavigateLecueBook';

function Home() {
  return (
    <React.Fragment>
      <NavigateLecueBook />
      <LecueBookList />
    </React.Fragment>
  );
}

export default Home;
