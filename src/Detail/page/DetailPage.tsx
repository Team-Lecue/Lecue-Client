import Header from '../../components/common/Header';
import Profile from '../components/Profile';

function DetailPage() {
  return (
    <div>
      <Header headerTitle={'레큐북'} isDetailPage />
      <Profile />
    </div>
  );
}

export default DetailPage;
