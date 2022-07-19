import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div
      style={{
       /*  height: '100vh', */
      /*   display: 'flex',
        justifyContent: 'center', */
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
  userName={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />

      <FriendList friends={friends} />;
      
      <Statistics title="Upload stats" stats={data} />

      <TransactionHistory transactions={transactions} />;
    </div>
  );
};
