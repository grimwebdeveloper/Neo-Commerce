import { tours } from '../data';
import Title from './Title';

const Tours = () => {
  return (
    <section className='section' id='featured'>
      <Title title='featured' subtitle='tours' />
      <div className='section-center featured-center '>
        {tours.map((tour) => {
          const { id, image, date, title, info, location, duration, price } =
            tour;
          return (
            <article key={id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={image} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <h4>{title}</h4>
                <p>{info}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <div className='tour-btn'>
        <a href='#' className='btn'>
          all tours
        </a>
      </div>
    </section>
  );
};

export default Tours;
