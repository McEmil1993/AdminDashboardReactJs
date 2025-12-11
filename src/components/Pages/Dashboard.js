import React from 'react';
import Widget from '../UI/Widget';
import Table from '../UI/Table';
import CustomBarChart from '../Charts/BarChart';
import CustomLineChart from '../Charts/LineChart';
import CustomPieChart from '../Charts/PieChart';
import ChartContainer from '../Charts/ChartContainer';

const Dashboard = () => {
  // Sample data for charts
  const monthlyData = [
    { month: 'Jan', sales: 4000, revenue: 2400, profit: 1600 },
    { month: 'Feb', sales: 3000, revenue: 1398, profit: 1200 },
    { month: 'Mar', sales: 9800, revenue: 4000, profit: 2800 },
    { month: 'Apr', sales: 3908, revenue: 3000, profit: 2000 },
    { month: 'May', sales: 4800, revenue: 2780, profit: 1890 },
    { month: 'Jun', sales: 3800, revenue: 1890, profit: 1200 },
  ];

  const performanceData = [
    { month: 'Jan', current: 4000, previous: 2400 },
    { month: 'Feb', current: 3000, previous: 1398 },
    { month: 'Mar', current: 9800, previous: 4000 },
    { month: 'Apr', current: 3908, previous: 3000 },
    { month: 'May', current: 4800, previous: 2780 },
    { month: 'Jun', current: 3800, previous: 1890 },
  ];

  const categoryData = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Books', value: 300 },
    { name: 'Home', value: 200 },
    { name: 'Sports', value: 100 },
  ];

  const recentActivities = [
    { id: 1, user: 'John Doe', action: 'Created new product', time: '2 min ago' },
    { id: 2, user: 'Jane Smith', action: 'Updated user profile', time: '5 min ago' },
    { id: 3, user: 'Mike Johnson', action: 'Deleted old records', time: '10 min ago' },
  ];

  const tableColumns = [
    { key: 'user', title: 'User' },
    { key: 'action', title: 'Action' },
    { key: 'time', title: 'Time' },
  ];

  const StatsIcon = ({ d }) => (
    <svg className="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
    </svg>
  );

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-sm lg:text-base text-gray-600">Welcome to your admin dashboard</p>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Widget
          title="Total Users"
          value="12,342"
          subtitle="+12% from last month"
          icon={<StatsIcon d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-4a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />}
          color="primary"
        />
        
        <Widget
          title="Revenue"
          value="$24,300"
          subtitle="+8% from last month"
          icon={<StatsIcon d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v1m0 9v1m0-1v1m-6-9h1m-1 4h1m6-4h1m-1 4h1m-5-5v5m5-5v5" />}
          color="success"
        />
        
        <Widget
          title="Orders"
          value="1,234"
          subtitle="+5% from last month"
          icon={<StatsIcon d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />}
          color="warning"
        />
        
        <Widget
          title="Pending"
          value="23"
          subtitle="-2% from last month"
          icon={<StatsIcon d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />}
          color="danger"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Sales Bar Chart */}
        <ChartContainer 
          title="Monthly Sales Performance"
          subtitle="Comparison of sales, revenue, and profit"
        >
          <CustomBarChart
            data={monthlyData}
            xAxisKey="month"
            barKeys={['sales', 'revenue', 'profit']}
            colors={['#0ea5e9', '#10b981', '#f59e0b']}
            height={300}
            title={false}
          />
        </ChartContainer>

        {/* Performance Line Chart */}
        <ChartContainer 
          title="Performance Trend"
          subtitle="Current vs Previous year comparison"
        >
          <CustomLineChart
            data={performanceData}
            xAxisKey="month"
            lineKeys={['current', 'previous']}
            colors={['#0ea5e9', '#8b5cf6']}
            height={300}
            title={false}
          />
        </ChartContainer>
      </div>

      {/* Pie Chart and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Category Distribution */}
        <div className="lg:col-span-1">
          <ChartContainer 
            title="Category Distribution"
            subtitle="Sales by product category"
          >
            <CustomPieChart
              data={categoryData}
              dataKey="value"
              nameKey="name"
              height={300}
              title={false}
            />
          </ChartContainer>
        </div>

        {/* Recent Activity Table */}
        <div className="lg:col-span-2">
          <ChartContainer 
            title="Recent Activity"
            subtitle="Latest user actions in the system"
          >
            <Table
              columns={tableColumns}
              data={recentActivities}
              keyField="id"
            />
          </ChartContainer>
        </div>
      </div>

      {/* Additional Bar Chart - Full Width */}
      <ChartContainer 
        title="Detailed Revenue Analysis"
        subtitle="Breakdown of revenue sources by month"
        action={
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            View Report →
          </button>
        }
      >
        <CustomBarChart
          data={monthlyData}
          xAxisKey="month"
          barKeys={['revenue', 'profit']}
          colors={['#0ea5e9', '#10b981']}
          height={250}
          title={false}
        />
      </ChartContainer>
    </div>
  );
};

export default Dashboard;
