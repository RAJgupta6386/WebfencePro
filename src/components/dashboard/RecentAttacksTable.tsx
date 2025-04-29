
import { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Shield, MoreVertical, ExternalLink, Info, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface Attack {
  id: string;
  timestamp: string;
  ipAddress: string;
  type: string;
  path: string;
  country: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'blocked' | 'detected' | 'investigating';
}

interface RecentAttacksTableProps {
  attacks: Attack[];
}

export function RecentAttacksTable({ attacks }: RecentAttacksTableProps) {
  const { toast } = useToast();
  const [tableData, setTableData] = useState(attacks);

  const getSeverityColor = (severity: Attack['severity']) => {
    switch (severity) {
      case 'low':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'high':
        return 'bg-orange-500/10 text-orange-500 border-orange-500/20';
      case 'critical':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getStatusColor = (status: Attack['status']) => {
    switch (status) {
      case 'blocked':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'detected':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'investigating':
        return 'bg-cyber-purple/10 text-cyber-purple border-cyber-purple/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const handleBlock = (id: string) => {
    setTableData(prevData =>
      prevData.map(attack =>
        attack.id === id ? { ...attack, status: 'blocked' } : attack
      )
    );
    
    toast({
      title: "Attack blocked",
      description: `Attack ID ${id} has been blocked successfully.`,
    });
  };

  const handleViewDetails = (id: string) => {
    toast({
      title: "Attack details",
      description: `Viewing details for attack ID ${id}.`,
    });
  };

  return (
    <div className="rounded-md border border-white/10 overflow-hidden">
      <Table>
        <TableHeader className="bg-cyber-charcoal">
          <TableRow className="hover:bg-transparent border-white/10">
            <TableHead className="text-gray-400 font-medium">Timestamp</TableHead>
            <TableHead className="text-gray-400 font-medium">IP Address</TableHead>
            <TableHead className="text-gray-400 font-medium">Type</TableHead>
            <TableHead className="text-gray-400 font-medium">Path</TableHead>
            <TableHead className="text-gray-400 font-medium">Severity</TableHead>
            <TableHead className="text-gray-400 font-medium">Status</TableHead>
            <TableHead className="text-gray-400 font-medium w-10"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((attack) => (
            <TableRow key={attack.id} className="hover:bg-white/5 border-white/10">
              <TableCell className="text-gray-300">{attack.timestamp}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-cyber-purple/10 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-cyber-purple" />
                  </div>
                  <span className="text-gray-300">{attack.ipAddress}</span>
                  <span className="text-xs text-gray-500">{attack.country}</span>
                </div>
              </TableCell>
              <TableCell className="text-gray-300">{attack.type}</TableCell>
              <TableCell className="text-gray-300 font-mono text-xs">
                {attack.path}
              </TableCell>
              <TableCell>
                <Badge variant="outline" className={cn("font-medium", getSeverityColor(attack.severity))}>
                  {attack.severity}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className={cn("font-medium", getStatusColor(attack.status))}>
                  {attack.status}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="bg-cyber-charcoal border-white/10">
                    <DropdownMenuItem 
                      className="text-gray-300 focus:bg-white/5 focus:text-white cursor-pointer"
                      onClick={() => handleViewDetails(attack.id)}
                    >
                      <Info className="mr-2 h-4 w-4" />
                      View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      className="text-gray-300 focus:bg-white/5 focus:text-white cursor-pointer"
                      onClick={() => handleBlock(attack.id)}
                    >
                      <XCircle className="mr-2 h-4 w-4" />
                      Block IP
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-gray-300 focus:bg-white/5 focus:text-white cursor-pointer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Lookup IP
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
