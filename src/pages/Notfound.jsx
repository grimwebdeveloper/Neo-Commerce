import { useEffect } from 'react';

const Notfound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>Notfound</div>;
};

export default Notfound;
