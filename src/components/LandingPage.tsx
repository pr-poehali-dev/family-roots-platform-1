import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface LandingPageProps {
  onStartClick: () => void;
}

export default function LandingPage({ onStartClick }: LandingPageProps) {
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
            onClick={onStartClick}
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
