import PropTypes from 'prop-types';
import scss from './statistics.module.scss'
import {getRandomHexColor} from './statistics.js'

export const Statistics = ({title, stats }) =>{
   return <section className={scss.statistics}>
   <h2 className={scss.statistics__title}>{title}</h2>
 
   <ul  className={`${scss.statistics__list}`} >
   {
      stats.map(event => {
     return <li style={{backgroundColor: getRandomHexColor()}} className={scss.statistics__item} key={event.id}>
       <span className={scss.statistics__label}>{event.label}</span>
       <span className={scss.statistics__percentage}>{event.percentage}</span>
     </li>
   })}
   </ul>
 </section>
}

Statistics.propTypes = {
   title: PropTypes.string.isRequired,
   stats: PropTypes.arrayOf(PropTypes.exact(
      { 
         id: PropTypes.string.isRequired,
         label: PropTypes.string.isRequired,
         percentage: PropTypes.number.isRequired,
       }
   ))
}

