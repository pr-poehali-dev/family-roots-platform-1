import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface DashboardSidebarProps {
  stats: {
    completionRate: number;
  };
}

export default function DashboardSidebar({ stats }: DashboardSidebarProps) {
  return (
    <div className="space-y-6">
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="text-lg">Текущие квесты</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  🎯
                </div>
                <div>
                  <p className="font-medium text-sm">Добавьте место рождения</p>
                  <p className="text-xs text-muted-foreground">Заполните для бабушки</p>
                </div>
              </div>
            </div>
            <Progress value={60} className="h-2" />
            <p className="text-xs text-muted-foreground">60 XP • Бейдж "Краевед"</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  📸
                </div>
                <div>
                  <p className="font-medium text-sm">Загрузите 5 фотографий</p>
                  <p className="text-xs text-muted-foreground">3 из 5 выполнено</p>
                </div>
              </div>
            </div>
            <Progress value={60} className="h-2" />
            <p className="text-xs text-muted-foreground">100 XP • Бейдж "Архивариус"</p>
          </div>
        </CardContent>
      </Card>

      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="text-lg">Прогресс заполнения</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Основная информация</span>
                <span className="text-sm font-semibold text-primary">{stats.completionRate}%</span>
              </div>
              <Progress value={stats.completionRate} className="h-3" />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 border-t">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">8</p>
                <p className="text-xs text-muted-foreground">Профилей заполнено</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-secondary">4</p>
                <p className="text-xs text-muted-foreground">Требуют внимания</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle className="text-lg">Памятные даты</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Calendar" className="text-primary" size={18} />
            </div>
            <div>
              <p className="font-medium text-sm">День рождения</p>
              <p className="text-xs text-muted-foreground">Бабушка Мария • 5 декабря</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
              <Icon name="Heart" className="text-secondary" size={18} />
            </div>
            <div>
              <p className="font-medium text-sm">Годовщина свадьбы</p>
              <p className="text-xs text-muted-foreground">Родители • 15 декабря</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
