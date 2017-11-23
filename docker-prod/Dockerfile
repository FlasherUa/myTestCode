FROM php:7-apache
RUN a2enmod rewrite

RUN docker-php-ext-install pdo pdo_mysql

RUN service apache2 restart
