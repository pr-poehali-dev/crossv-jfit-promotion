import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-2xl">💪</span>
            </div>
            <span className="text-2xl font-bold">CrossV jFit</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#features" className="hover:text-primary transition-colors">Возможности</a>
            <a href="#trainers" className="hover:text-primary transition-colors">Для тренеров</a>
            <a href="#clients" className="hover:text-primary transition-colors">Для клиентов</a>
            <a href="#clubs" className="hover:text-primary transition-colors">Для клубов</a>
            <a href="#download" className="hover:text-primary transition-colors">Скачать</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            Начать
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                CROSSV JFIT
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Elevate Your Training.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Отслеживайте прогресс, получайте доступ к тренировкам экспертов и подключайтесь к поддерживающему сообществу.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8">Получить доступ</Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-foreground hover:bg-primary/10 font-semibold text-lg px-8">Узнать больше</Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <img 
                  src="https://cdn.poehali.dev/files/0e9816b0-f369-4881-abc4-e4b6f8ea5d3c.png" 
                  alt="CrossV jFit App"
                  className="relative z-10 rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">Возможности</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Всё необходимое для эффективных тренировок</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Calendar" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Календарь тренировок</h3>
              <p className="text-muted-foreground leading-relaxed">
                Планируйте и отслеживайте свои тренировки с удобным календарём. Всегда знайте, что вас ждёт впереди.
              </p>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Clock" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Бронирование занятий</h3>
              <p className="text-muted-foreground leading-relaxed">
                Бронируйте тренировки в один клик. Управляйте расписанием без лишних звонков и сообщений.
              </p>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="TrendingUp" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Отслеживание прогресса</h3>
              <p className="text-muted-foreground leading-relaxed">
                Следите за своими достижениями, анализируйте результаты и достигайте новых целей быстрее.
              </p>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Users" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Сообщество</h3>
              <p className="text-muted-foreground leading-relaxed">
                Присоединяйтесь к активному сообществу спортсменов, делитесь опытом и мотивируйте друг друга.
              </p>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Dumbbell" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Программы тренировок</h3>
              <p className="text-muted-foreground leading-relaxed">
                Получите доступ к профессиональным программам тренировок от опытных тренеров.
              </p>
            </Card>

            <Card className="p-8 bg-background border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Smartphone" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Удобный интерфейс</h3>
              <p className="text-muted-foreground leading-relaxed">
                Простое и интуитивное приложение, которым легко пользоваться в любой момент.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="trainers" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Для тренеров</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Управляйте своими клиентами, создавайте персональные программы тренировок и отслеживайте их прогресс в одном приложении.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-lg">Управление расписанием и бронированиями</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-lg">Создание персональных тренировочных планов</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-lg">Отслеживание прогресса клиентов</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-lg">Аналитика и отчёты</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
                Стать тренером
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl"></div>
              <Card className="p-8 bg-card relative">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-muted/50 rounded w-1/2"></div>
                    </div>
                  </div>
                  <div className="h-32 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="BarChart3" size={48} className="text-primary" />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-muted rounded-lg"></div>
                    <div className="h-20 bg-muted rounded-lg"></div>
                    <div className="h-20 bg-muted rounded-lg"></div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 to-transparent rounded-3xl"></div>
              <Card className="p-8 bg-background relative">
                <div className="space-y-6">
                  <div className="h-48 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon name="Activity" size={64} className="text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Тренировок</span>
                      <span className="font-bold text-xl text-primary">24</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Прогресс</span>
                      <span className="font-bold text-xl text-primary">89%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Следующая</span>
                      <span className="font-bold text-xl">Завтра 10:00</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Для клиентов</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Достигайте своих фитнес-целей с персональными программами, удобным планированием и поддержкой профессиональных тренеров.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-lg">Персональные программы тренировок</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-lg">Удобное бронирование занятий</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-lg">Отслеживание личного прогресса</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} />
                  </div>
                  <span className="text-lg">Связь с тренером 24/7</span>
                </li>
              </ul>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
                Начать тренировки
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="clubs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Для клубов</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Автоматизируйте управление вашим фитнес-клубом с помощью современной платформы для бронирования, управления клиентами и аналитики.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border text-center hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Icon name="Building2" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Управление залами</h3>
              <p className="text-muted-foreground leading-relaxed">
                Контролируйте загруженность залов, управляйте расписанием и оборудованием из одного места.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border text-center hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Icon name="Users2" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">База клиентов</h3>
              <p className="text-muted-foreground leading-relaxed">
                Централизованная система управления клиентами с историей посещений и абонементами.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border text-center hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Icon name="LineChart" className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Аналитика бизнеса</h3>
              <p className="text-muted-foreground leading-relaxed">
                Подробная статистика посещаемости, доходов и эффективности работы клуба.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
              Подключить клуб
            </Button>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-4 bg-gradient-to-br from-primary/20 via-background to-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Скачать приложение</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Начните свой путь к лучшей версии себя уже сегодня. Доступно на всех платформах.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <Button size="lg" className="bg-background text-foreground hover:bg-muted border-2 border-border h-16 px-8">
              <Icon name="Apple" className="mr-3" size={24} />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Загрузить в</div>
                <div className="font-bold text-base">App Store</div>
              </div>
            </Button>
            <Button size="lg" className="bg-background text-foreground hover:bg-muted border-2 border-border h-16 px-8">
              <Icon name="Smartphone" className="mr-3" size={24} />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Загрузить в</div>
                <div className="font-bold text-base">Google Play</div>
              </div>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Быстрый старт</h3>
              <p className="text-muted-foreground">Регистрация за 30 секунд</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🔒</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Безопасность</h3>
              <p className="text-muted-foreground">Ваши данные защищены</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Результаты</h3>
              <p className="text-muted-foreground">Достигайте целей быстрее</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Контакты</h2>
            <p className="text-lg text-muted-foreground">
              Есть вопросы? Мы всегда готовы помочь!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:info@crossvjfit.com" className="text-muted-foreground hover:text-primary transition-colors">
                info@crossvjfit.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Телефон</h3>
              <a href="tel:+78001234567" className="text-muted-foreground hover:text-primary transition-colors">
                +7 (800) 123-45-67
              </a>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Адрес</h3>
              <p className="text-muted-foreground">
                Москва, ул. Примерная, 123
              </p>
            </div>
          </div>

          <Card className="p-8 bg-background border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение</label>
                <textarea 
                  className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
                  placeholder="Ваше сообщение..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg">
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💪</span>
                </div>
                <span className="text-xl font-bold">CrossV jFit</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Ваш путь к лучшей версии себя начинается здесь.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#trainers" className="hover:text-primary transition-colors">Для тренеров</a></li>
                <li><a href="#clients" className="hover:text-primary transition-colors">Для клиентов</a></li>
                <li><a href="#clubs" className="hover:text-primary transition-colors">Для клубов</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
                <li><a href="#contacts" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>&copy; 2024 CrossV jFit. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;