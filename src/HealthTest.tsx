import { useEffect, useState } from 'react';

import { api } from './libs/api';

interface TestType {
  status: string;
}

function HealthTest() {
  const [data, setData] = useState<TestType | undefined>();
  const getHealthCheck = async () => {
    const data = await api.get('/actuator/health');
    setData(data.data);
  };

  useEffect(() => {
    getHealthCheck();
  }, []);

  return <div style={{ fontSize: '3rem' }}>status : {data?.status}</div>;
}

export default HealthTest;
