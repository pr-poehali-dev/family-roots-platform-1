import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface FamilyMember {
  id: string;
  name: string;
  role: string;
  x: number;
  y: number;
  generation: number;
}

export default function Index() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { id: '1', name: 'Вы', role: 'Основатель', x: 400, y: 300, generation: 0 },
  ]);

  const [selectedMember, setSelectedMember] = useState<string | null>(null);
  const [stats] = useState({
    totalMembers: 12,
    generations: 4,
    documentsUploaded: 28,
    completionRate: 65,
  });

  const addFamilyMember = (parentId: string, relationship: 'parent' | 'child' | 'spouse') => {
    const parent = familyMembers.find(m => m.id === parentId);
    if (!parent) return;

    let newX = parent.x;
    let newY = parent.y;
    let newGen = parent.generation;
    let newRole = 'Родственник';

    if (relationship === 'parent') {
      newY = parent.y - 120;
      newGen = parent.generation + 1;
      newRole = 'Родитель';
      newX = parent.x + (familyMembers.filter(m => m.generation === newGen).length * 150) - 75;
    } else if (relationship === 'child') {
      newY = parent.y + 120;
      newGen = parent.generation - 1;
      newRole = 'Ребёнок';
      newX = parent.x + (familyMembers.filter(m => m.generation === newGen).length * 150) - 75;
    } else {
      newX = parent.x + 150;
      newRole = 'Супруг(а)';
    }

    const newMember: FamilyMember = {
      id: Date.now().toString(),
      name: 'Новый член семьи',
      role: newRole,
      x: newX,
      y: newY,
      generation: newGen,
    };

    setFamilyMembers([...familyMembers, newMember]);
  };

  if (!showDashboard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center animate-fade-in">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="GitBranch" className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold">Семейные корни</span>
          </div>
          <Button variant="outline" className="hover-scale">Войти</Button>
        </header>

        <section className="container mx-auto px-4 py-20 text-center animate-fade-in">
          <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90">
            <Icon name="Sparkles" size={14} className="mr-1" />
            ИИ-технологии для вашей истории
          </Badge>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Сохраните историю<br />вашего рода
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Интерактивная платформа с защитой данных, алгоритмами проверки и умным хранением медиафайлов
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="hover-scale text-lg px-8"
              onClick={() => setShowDashboard(true)}
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="hover-scale text-lg px-8">
              <Icon name="Video" size={20} className="mr-2" />
              Смотреть демо
            </Button>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/e6826f9a-a644-4f0a-bfb4-a924a6bac8a6/files/e3fd7352-6a8c-4424-8be8-a79548752dbc.jpg"
              alt="Генеалогическое древо"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-muted text-muted-foreground">
              <Icon name="Shield" size={14} className="mr-1" />
              Наука внутри
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Технологии на службе памяти</h2>
            <p className="text-muted-foreground text-lg">Алгоритмы проверяют даты, шифрование защищает данные</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale border-2 hover:border-primary transition-colors animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Database" className="text-primary" size={24} />
                </div>
                <CardTitle>Умное хранение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Автоматическая организация фото, документов и аудиозаписей с тегированием лиц
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-secondary transition-colors animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="ShieldCheck" className="text-secondary" size={24} />
                </div>
                <CardTitle>Защита данных</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Шифрование на серверах РФ, контроль приватности каждого профиля
                </p>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 hover:border-primary transition-colors animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Zap" className="text-primary" size={24} />
                </div>
                <CardTitle>ИИ-помощник</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Проверка логических ошибок в датах, подсказки для исследования, умный поиск
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-gradient-to-r from-accent/30 to-transparent rounded-3xl">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-primary text-primary-foreground">
              <Icon name="Gamepad2" size={14} className="mr-1" />
              Геймификация
            </Badge>
            <h2 className="text-4xl font-bold mb-6">Превратите исследование в квест</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Выполняйте задания, получайте бейджи, открывайте достижения и углубляйтесь в историю рода
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="outline" className="text-base px-4 py-2">🏆 Краевед</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">📸 Архивариус</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">🎯 Исследователь</Badge>
              <Badge variant="outline" className="text-base px-4 py-2">⭐ Хранитель памяти</Badge>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-muted-foreground text-lg">Выберите подходящий план</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Бесплатно</CardTitle>
                <p className="text-3xl font-bold mt-4">0 ₽<span className="text-base font-normal text-muted-foreground">/мес</span></p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>До 50 персон</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>1 ГБ хранилища</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>Базовая геймификация</span>
                </div>
                <Button variant="outline" className="w-full mt-6">Начать</Button>
              </CardContent>
            </Card>

            <Card className="hover-scale border-2 border-primary relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">Популярный</Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Премиум</CardTitle>
                <p className="text-3xl font-bold mt-4">490 ₽<span className="text-base font-normal text-muted-foreground">/мес</span></p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>Безлимитные персоны</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>100 ГБ хранилища</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>ИИ-помощник</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>Экспорт в PDF/GEDCOM</span>
                </div>
                <Button className="w-full mt-6">Выбрать</Button>
              </CardContent>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle className="text-2xl">Семейный</CardTitle>
                <p className="text-3xl font-bold mt-4">990 ₽<span className="text-base font-normal text-muted-foreground">/мес</span></p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>Все из Премиум</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>До 5 пользователей</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>Совместное редактирование</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary" size={18} />
                  <span>Приоритетная поддержка</span>
                </div>
                <Button variant="outline" className="w-full mt-6">Выбрать</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="GitBranch" className="text-white" size={16} />
              </div>
              <span className="font-bold">Семейные корни</span>
            </div>
            <p className="text-muted-foreground text-sm">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">О проекте</Button>
              <Button variant="ghost" size="sm">Поддержка</Button>
              <Button variant="ghost" size="sm">Политика</Button>
            </div>
          </div>
        </footer>
      </div>
    );
  }

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
            <Card className="animate-fade-in">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Интерактивное древо</CardTitle>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Icon name="ZoomIn" size={16} />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Icon name="ZoomOut" size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative h-[500px] bg-accent/10 rounded-lg overflow-hidden border-2 border-dashed border-primary/20">
                  <svg className="w-full h-full">
                    {familyMembers.map((member, idx) => {
                      const parentIndex = idx > 0 ? Math.floor((idx - 1) / 2) : -1;
                      if (parentIndex >= 0) {
                        const parent = familyMembers[parentIndex];
                        return (
                          <line
                            key={`line-${member.id}`}
                            x1={parent.x}
                            y1={parent.y}
                            x2={member.x}
                            y2={member.y}
                            stroke="hsl(var(--primary))"
                            strokeWidth="2"
                            className="opacity-50"
                          />
                        );
                      }
                      return null;
                    })}
                  </svg>

                  {familyMembers.map((member) => (
                    <div
                      key={member.id}
                      className="absolute group cursor-pointer"
                      style={{
                        left: member.x - 60,
                        top: member.y - 60,
                        width: 120,
                      }}
                      onClick={() => setSelectedMember(member.id)}
                    >
                      <div className="bg-card border-2 border-primary rounded-xl p-3 hover:shadow-lg transition-all hover:scale-105 hover:border-secondary">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-2 flex items-center justify-center text-white font-bold">
                          {member.name.charAt(0)}
                        </div>
                        <p className="text-xs font-semibold text-center truncate">{member.name}</p>
                        <p className="text-[10px] text-muted-foreground text-center">{member.role}</p>
                      </div>
                      
                      {selectedMember === member.id && (
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            size="sm"
                            className="h-6 w-6 p-0 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              addFamilyMember(member.id, 'parent');
                            }}
                            title="Добавить родителя"
                          >
                            <Icon name="ArrowUp" size={12} />
                          </Button>
                          <Button
                            size="sm"
                            className="h-6 w-6 p-0 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              addFamilyMember(member.id, 'child');
                            }}
                            title="Добавить ребёнка"
                          >
                            <Icon name="ArrowDown" size={12} />
                          </Button>
                          <Button
                            size="sm"
                            className="h-6 w-6 p-0 rounded-full"
                            onClick={(e) => {
                              e.stopPropagation();
                              addFamilyMember(member.id, 'spouse');
                            }}
                            title="Добавить супруга"
                          >
                            <Icon name="ArrowRight" size={12} />
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

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
        </div>
      </div>
    </div>
  );
}
