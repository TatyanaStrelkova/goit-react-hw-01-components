import PropTypes from 'prop-types'; 
import {Statistic, StatisticTitle, StatisticList, StatisticItem, StatisticLabe, StatisticPerc} from './Statistics.styled'

const Statistics = ({ title, stats }) => {
    return <Statistic>
{ title && <StatisticTitle>{title}</StatisticTitle> }

        <StatisticList>
            {stats.map(stat =>
            (<StatisticItem key={stat.id}> <StatisticLabe>{stat.label}</StatisticLabe>
     <StatisticPerc>{stat.percentage}%</StatisticPerc>
    </StatisticItem>))}
  </StatisticList>
</Statistic>
};
 
Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),
}

export default Statistics;