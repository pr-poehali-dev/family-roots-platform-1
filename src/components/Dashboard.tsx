import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import FamilyTree, { FamilyMember } from './FamilyTree';
import DashboardSidebar from './DashboardSidebar';

interface DashboardProps {
  familyMembers: FamilyMember[];
  selectedMember: string | null;
  stats: {
    totalMembers: number;
    generations: number;
    documentsUploaded: number;
    completionRate: number;
  };
  onSelectMember: (id: string) => void;
  onAddMember: (parentId: string, relationship: 'parent' | 'child' | 'spouse') => void;
}

export default function Dashboard({ familyMembers, selectedMember, stats, onSelectMember, onAddMember }: DashboardProps) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="GitBranch" className="text-white" size={16} />
              </div>
              <span className="font-bold">Семейные корни</span>
            </div>
            <nav className="hidden md:flex gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="LayoutDashboard" size={16} className="mr-2" />
                Дашборд
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="GitBranch" size={16} className="mr-2" />
                Древо
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Archive" size={16} className="mr-2" />
                Архив
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="GraduationCap" size={16} className="mr-2" />
                Обучение
              </Button>
            </nav>
          </div>
          <Button variant="outline" size="sm">
            <Icon name="User" size={16} className="mr-2" />
            Профиль
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover-scale animate-fade-in">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Всего персон</CardTitle>
              <Icon name="Users" className="text-muted-foreground" size={18} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.totalMembers}</div>
              <p className="text-xs text-muted-foreground mt-1">+3 за последний месяц</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Поколений</CardTitle>
              <Icon name="GitBranch" className="text-muted-foreground" size={18} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">{stats.generations}</div>
              <p className="text-xs text-muted-foreground mt-1">Прабабушка — самый дальний предок</p>
            </CardContent>
          </Card>

          <Card className="hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Документов</CardTitle>
              <Icon name="FileText" className="text-muted-foreground" size={18} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{stats.documentsUploaded}</div>
              <p className="text-xs text-muted-foreground mt-1">Фото, документы, аудио</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FamilyTree 
              familyMembers={familyMembers}
              selectedMember={selectedMember}
              onSelectMember={onSelectMember}
              onAddMember={onAddMember}
            />
          </div>

          <DashboardSidebar stats={stats} />
        </div>
      </div>
    </div>
  );
}
