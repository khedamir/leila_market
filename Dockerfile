# Используем базовый образ Node.js
FROM node:18

# Создаем директорию приложения в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json (если есть) в контейнер
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем файлы проекта в контейнер
COPY . .

# Собираем проект
RUN npm run build

# Открываем порт, на котором будет работать Next.js приложение
EXPOSE 3000

# Запускаем Next.js приложение
CMD ["npm", "start"]