import PropTypes from 'prop-types'; 

const Statistics = ({ title, stats }) => {
    return <section class="statistics">
{ title !== undefined && (<h2 class="title">{title}</h2>) }

        <ul class="stat-list">
            {stats.map(stat =>
            (<li key={stat.id} class="item"> <span class="label">{stat.label}</span>
     <span class="percentage">{stat.percentage}%</span>
    </li>))}
  </ul>
</section>
};
 
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
}

export default Statistics;