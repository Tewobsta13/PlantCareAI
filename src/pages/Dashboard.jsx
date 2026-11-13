import DashboardHeader from '../components/dashboard/DashboardHeader';
import DashboardMain from '../components/dashboard/DashboardMain';
import KpiCards from '../components/dashboard/KpiCards';

export default function Dashboard() {
  return (
    <div className="max-w-[1440px] w-full mx-auto px-margin-mobile sm:px-margin py-space-xl flex flex-col gap-space-xl">
      <DashboardHeader />
      <KpiCards />
      <DashboardMain />
    </div>
  );
}
