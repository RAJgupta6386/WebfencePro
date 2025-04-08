
import { 
  Shield, 
  AlertTriangle, 
  BarChart3, 
  Clock, 
  Server, 
  Users 
} from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { AttackTypeChart } from '@/components/dashboard/AttackTypeChart';
import { AttackTimeline } from '@/components/dashboard/AttackTimeline';
import { RecentAttacksTable } from '@/components/dashboard/RecentAttacksTable';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Sample data for the attacks chart
const attackTypeData = [
  { name: 'SQL Injection', value: 43, color: '#9b87f5' },
  { name: 'XSS', value: 28, color: '#1EAEDB' },
  { name: 'Path Traversal', value: 16, color: '#F97316' },
  { name: 'CSRF', value: 8, color: '#EAB308' },
  { name: 'Others', value: 5, color: '#64748B' },
];

// Sample data for the timeline chart
const generateTimelineData = () => {
  const hours = [];
  const now = new Date();
  
  for (let i = 23; i >= 0; i--) {
    const hour = new Date(now);
    hour.setHours(now.getHours() - i);
    hours.push({
      time: hour.getHours() + ':00',
      value: Math.floor(Math.random() * 40) + 5,
    });
  }
  
  return hours;
};

// Sample data for the recent attacks table
const recentAttacks = [
  {
    id: 'atk-001',
    timestamp: '2023-05-10 14:23:15',
    ipAddress: '192.168.1.45',
    type: 'SQL Injection',
    path: '/api/users?id=1%27%20OR%20%271%27=%271',
    country: 'US',
    severity: 'high' as const,
    status: 'blocked' as const,
  },
  {
    id: 'atk-002',
    timestamp: '2023-05-10 14:15:32',
    ipAddress: '45.33.10.22',
    type: 'XSS',
    path: '/search?q=<script>alert(1)</script>',
    country: 'RU',
    severity: 'medium' as const,
    status: 'blocked' as const,
  },
  {
    id: 'atk-003',
    timestamp: '2023-05-10 14:10:45',
    ipAddress: '58.22.45.78',
    type: 'Path Traversal',
    path: '/assets/../../etc/passwd',
    country: 'CN',
    severity: 'critical' as const,
    status: 'detected' as const,
  },
  {
    id: 'atk-004',
    timestamp: '2023-05-10 14:05:12',
    ipAddress: '112.98.45.23',
    type: 'CSRF',
    path: '/user/settings',
    country: 'BR',
    severity: 'low' as const,
    status: 'investigating' as const,
  },
  {
    id: 'atk-005',
    timestamp: '2023-05-10 13:58:36',
    ipAddress: '77.45.23.89',
    type: 'Code Injection',
    path: '/admin/execute?cmd=rm%20-rf%20%2F',
    country: 'IN',
    severity: 'critical' as const,
    status: 'blocked' as const,
  },
];

const Dashboard = () => {
  return (
    <DashboardLayout 
      title="Dashboard"
      subtitle="Overview of your security metrics and recent activity"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatCard
          title="Total Attacks Blocked"
          value="12,584"
          description="Last 30 days"
          icon={<Shield className="h-5 w-5" />}
          trend={{ value: 8.2, isPositive: false }}
        />
        <StatCard
          title="Active Threats"
          value="32"
          description="4 high severity"
          icon={<AlertTriangle className="h-5 w-5" />}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Protection Score"
          value="94/100"
          description="3 recommendations available"
          icon={<BarChart3 className="h-5 w-5" />}
        />
        <StatCard
          title="Last Attack"
          value="2m ago"
          description="SQL injection from 192.168.1.45"
          icon={<Clock className="h-5 w-5" />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Card className="border-white/10 bg-cyber-charcoal">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white">Attack Types</CardTitle>
          </CardHeader>
          <CardContent>
            <AttackTypeChart data={attackTypeData} />
          </CardContent>
        </Card>
        
        <Card className="border-white/10 bg-cyber-charcoal">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white">Attack Timeline (24h)</CardTitle>
          </CardHeader>
          <CardContent>
            <AttackTimeline data={generateTimelineData()} />
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 gap-6 mb-6">
        <Tabs defaultValue="recent">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-white">Recent Attacks</h2>
            <TabsList className="bg-cyber-charcoal border border-white/10">
              <TabsTrigger value="recent" className="data-[state=active]:bg-cyber-purple/10 data-[state=active]:text-cyber-purple">Recent</TabsTrigger>
              <TabsTrigger value="blocked" className="data-[state=active]:bg-cyber-purple/10 data-[state=active]:text-cyber-purple">Blocked</TabsTrigger>
              <TabsTrigger value="investigating" className="data-[state=active]:bg-cyber-purple/10 data-[state=active]:text-cyber-purple">Investigating</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="recent">
            <RecentAttacksTable attacks={recentAttacks} />
          </TabsContent>
          <TabsContent value="blocked">
            <RecentAttacksTable attacks={recentAttacks.filter(attack => attack.status === 'blocked')} />
          </TabsContent>
          <TabsContent value="investigating">
            <RecentAttacksTable attacks={recentAttacks.filter(attack => attack.status === 'investigating')} />
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-white/10 bg-cyber-charcoal">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white">Protected Servers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mr-3">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Production Server</p>
                    <p className="text-xs text-gray-400">api.example.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white">486 attacks</p>
                  <p className="text-xs text-gray-400">Last 24h</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-blue/10 flex items-center justify-center text-cyber-blue mr-3">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Staging Server</p>
                    <p className="text-xs text-gray-400">staging.example.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white">124 attacks</p>
                  <p className="text-xs text-gray-400">Last 24h</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mr-3">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Development Server</p>
                    <p className="text-xs text-gray-400">dev.example.com</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white">57 attacks</p>
                  <p className="text-xs text-gray-400">Last 24h</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-white/10 bg-cyber-charcoal">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium text-white">Team Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mr-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-xs text-gray-400">Updated firewall rules</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm">5m ago</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mr-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Jane Smith</p>
                    <p className="text-xs text-gray-400">Resolved alert #45892</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm">1h ago</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mr-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Mike Johnson</p>
                    <p className="text-xs text-gray-400">Added new protection rule</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm">3h ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
