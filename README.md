# APP-USERS / ПРИЛОЖЕНИЕ-ПОЛЬЗОВАТЕЛИ

<div align="center">
  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge)

A simple and efficient user management system

Простая и эффективная система управления пользователями

</div>

## 🎯 Core Functionality / Основная функциональность

### English
- **View Users** - Browse all users in the system
- **Add Users** - Create new user entries
- **Edit Users** - Modify existing user information
- **Delete Users** - Remove users from the system
- **Custom CSS Styling** - Unique visual design

### Русский
- **Просмотр пользователей** - Просмотр всех пользователей в системе
- **Добавление пользователей** - Создание новых записей пользователей
- **Редактирование пользователей** - Изменение информации существующих пользователей
- **Удаление пользователей** - Удаление пользователей из системы
- **Кастомный CSS стиль** - Уникальный визуальный дизайн

## 🚀 Quick Start / Быстрый старт

### English
```bash
# Clone the repository
git clone https://github.com/typachortik/app_users.git

# Navigate to the project directory
cd app_users

# Install dependencies
npm install

# Start the application
npm run start

# Application will be available at:
http://localhost:3000/
```
### Русский
```bash
# Клонировать репозиторий
git clone https://github.com/typachortik/app_users.git

# Перейти в директорию проекта
cd app_users

# Установить зависимости
npm install

# Запустить приложение
npm run start

# Приложение будет доступно по адресу:
http://localhost:3000/
```
## 🛠️ Tech Stack / Технологический стек
### Backend / Бэкенд
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework / Веб-фреймворк
- **SQLite** - Lightweight database / Легковесная база данных
### Frontend / Фронтенд
- **EJS** - Template engine / Шаблонизатор
- **Custom CSS** - Unique styling / Уникальный стиль
## 📋 Available Operations / Доступные операции

| Operation / Операция | Method | Endpoint | Description / Описание |
|---------------------|--------|----------|-----------------------|
| View All Users<br>Просмотр всех пользователей | GET | `/users` | Display all users<br>Отобразить всех пользователей |
| View Single User<br>Просмотр пользователя | GET | `/users/:id` | Display specific user<br>Отобразить конкретного пользователя |
| Add User<br>Добавить пользователя | POST | `/users` | Create new user<br>Создать нового пользователя |
| Edit User<br>Редактировать пользователя | POST | `/users/:id` | Update user data<br>Обновить данные пользователя |
| Delete User<br>Удалить пользователя | DELETE | `/users/:id` | Remove user<br>Удалить пользователя |

## 🎨 UI Features / Особенности интерфейса

### English
- **Clean Layout** - Intuitive user interface
- **Custom Styling** - Unique CSS design
- **User Forms** - Easy data input forms
- **Action Buttons** - Clear CTAs for operations
- **Table Display** - Organized user data presentation

### Русский
- **Чистый макет** - Интуитивно понятный интерфейс
- **Кастомный стиль** - Уникальный CSS дизайн
- **Формы пользователей** - Удобные формы ввода данных
- **Кнопки действий** - Понятные призывы к действию
- **Табличное отображение** - Организованное представление данных

## 📁 Project Structure / Структура проекта
```
app_users/
├── 📁 models/ # Database models & operations
│ # Модели и операции с БД
├── 📁 routes/ # API routes and endpoints
│ # API маршруты и endpoints
├── 📁 views/ # EJS templates and pages 
│ # EJS шаблоны и страницы
├── 📁 public/ # Static assets (CSS, images) 
│ └── 📁 css/ # Custom CSS styles
│ └── 📁 images/ # images
│ # Статические файлы (CSS, изображения)
├── package.json # Project dependencies
│ # Зависимости проекта
├── app.js # Main application file
│ # Главный файл приложения
└──────
```
## ⚙️ Configuration / Конфигурация

### English
The application uses SQLite database which requires no additional setup. The server runs on port 3000 by default.

### Русский
Приложение использует базу данных SQLite, которая не требует дополнительной настройки. Сервер запускается на порту 3000 по умолчанию.
<div align="center">

**Simple CRUD Application** / **Простое CRUD приложение**

Built with Node.js, Express, and custom CSS / Создано на Node.js, Express и кастомном CSS

</div>
